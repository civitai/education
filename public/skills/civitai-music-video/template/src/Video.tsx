// The music video: one composition timed to the song, in song seconds.
// Layers, back to front: scenes (Civitai images or clips, with slow pan and zoom and crossfades),
// the title card, and the karaoke lyrics. Everything it shows comes from the three JSON files
// at the project root: video.json (settings), lyrics.json (from the .lrc) and scenes.json.
import React from 'react';
import {
  AbsoluteFill,
  Audio,
  Img,
  Loop,
  OffthreadVideo,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import { loadFont } from '@remotion/google-fonts/Fredoka';
import video from '../video.json';
import lyrics from '../lyrics.json';
import scenesFile from '../scenes.json';

const { fontFamily } = loadFont('normal', { weights: ['600', '700'], subsets: ['latin'] });

export const FPS = 30;
const FADE = 0.35; // seconds of crossfade between scenes

type Line = { text: string; start: number; end: number };
type Scene = {
  id: string;
  from: number;
  to: number;
  prompt?: string;
  file?: string; // path under public/, e.g. "scenes/s01.jpg" or "clips/s01.mp4"
  clipSeconds?: number; // length of a video clip, so it can loop
  motion?: 'zoom-in' | 'zoom-out' | 'pan-left' | 'pan-right' | 'still';
  // Feature screenshot scenes ("kind": "shot"): the screenshot is shown framed on a card, with the
  // camera easing from the whole screen toward `focus` and an optional highlight ring there.
  kind?: 'image' | 'shot';
  focus?: { x: number; y: number; zoom?: number }; // x, y: 0..1 across the screenshot; zoom: 1 = whole card
  highlight?: boolean;
  label?: string; // optional caption chip above the card
};

type Settings = {
  title: string;
  subtitle?: string;
  song: string;
  duration: number;
  palette: string[];
  bpm?: number | null;
  beatOffset?: number;
  titleSeconds?: number;
  outro?: { text: string; from: number } | null;
};

const S = video as Settings;
const LINES = lyrics as Line[];
const SCENES = (scenesFile as { scenes: Scene[] }).scenes;
const MOTIONS: NonNullable<Scene['motion']>[] = ['zoom-in', 'pan-left', 'zoom-out', 'pan-right'];

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const ramp = (t: number, a: number, b: number) => clamp01((t - a) / (b - a));
const ease = (x: number) => 1 - Math.pow(1 - x, 3);

// 1 on the beat, falling to 0 before the next one. Flat 0 when no bpm is set.
const beatPulse = (t: number) => {
  if (!S.bpm) return 0;
  const spb = 60 / S.bpm;
  const p = ((((t - (S.beatOffset ?? 0)) / spb) % 1) + 1) % 1;
  return Math.pow(1 - p, 3);
};

const isVideo = (f?: string) => !!f && /\.(mp4|webm|mov)$/i.test(f);

// ---------- scenes ----------

// A feature screenshot, framed: blurred copy behind, the screenshot on a rounded card that eases in,
// then the camera moves from the whole card toward the focus point, with a pulsing ring there.
const ShotLayer: React.FC<{ scene: Scene; index: number; t: number; opacity: number; k: number }> = ({ scene, index, t, opacity, k }) => {
  const src = staticFile(scene.file!);
  const fx = scene.focus?.x ?? 0.5;
  const fy = scene.focus?.y ?? 0.5;
  const zoom = scene.focus?.zoom ?? 1.25;
  const enter = spring({ frame: Math.round((t - scene.from) * FPS), fps: FPS, config: { damping: 14, stiffness: 110 } });
  const move = ease(clamp01((k - 0.15) / 0.7)); // hold the full view briefly, then move in
  const z = 1 + (zoom - 1) * move;
  // Card is 1400x788 (16:9). Zoom about the focus point, then slide it toward the card's center as far
  // as the zoomed screenshot still covers the card (no empty edges).
  const W = 1400;
  const H = 788;
  const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
  const dx = clamp((0.5 - fx) * W * move, -(1 - fx) * W * (z - 1), fx * W * (z - 1));
  const dy = clamp((0.5 - fy) * H * move, -(1 - fy) * H * (z - 1), fy * H * (z - 1));
  const tilt = (1 - enter) * 8;
  const accent = S.palette[index % S.palette.length];
  const ring = scene.highlight === false ? 0 : ramp(t, scene.from + 0.6, scene.from + 1.0);
  const pulse = 0.5 + 0.5 * Math.sin((t - scene.from) * Math.PI * 2);
  return (
    <AbsoluteFill style={{ opacity, overflow: 'hidden', background: '#0b0b14' }}>
      <Img src={src} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(28px) brightness(0.45) saturate(1.3)', transform: 'scale(1.15)' }} />
      <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 150 }}>
        {scene.label ? (
          <div
            style={{
              position: 'absolute', top: 40, padding: '10px 26px', borderRadius: 999, background: accent, color: '#0b0b14',
              fontFamily, fontWeight: 700, fontSize: 40, opacity: ramp(t, scene.from + 0.2, scene.from + 0.5),
            }}
          >
            {scene.label}
          </div>
        ) : null}
        <div
          style={{
            position: 'relative', width: W, height: H, borderRadius: 28, overflow: 'hidden',
            boxShadow: `0 40px 120px rgba(0,0,0,.65), 0 0 0 4px ${accent}`,
            transform: `perspective(1600px) rotateX(${tilt}deg) scale(${0.85 + 0.15 * enter}) translateY(${(1 - enter) * 60}px)`,
          }}
        >
          <div style={{ position: 'absolute', inset: 0, transform: `translate(${dx}px, ${dy}px) scale(${z})`, transformOrigin: `${fx * 100}% ${fy * 100}%` }}>
            <Img src={src} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            {ring > 0 ? (
              <div
                style={{
                  position: 'absolute', left: `${fx * 100}%`, top: `${fy * 100}%`, width: 220, height: 220, marginLeft: -110, marginTop: -110,
                  borderRadius: '50%', border: `6px solid ${accent}`, opacity: ring * (0.55 + 0.45 * pulse),
                  boxShadow: `0 0 40px ${accent}`, transform: `scale(${(0.9 + 0.15 * pulse) / z})`,
                }}
              />
            ) : null}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const SceneLayer: React.FC<{ scene: Scene; index: number; t: number }> = ({ scene, index, t }) => {
  const len = Math.max(0.01, scene.to - scene.from);
  const k = clamp01((t - scene.from) / len); // 0..1 across the scene
  const fadeIn = index === 0 ? 1 : ramp(t, scene.from - FADE / 2, scene.from + FADE / 2);
  const fadeOut = index === SCENES.length - 1 ? 1 : 1 - ramp(t, scene.to - FADE / 2, scene.to + FADE / 2);
  const opacity = Math.min(fadeIn, fadeOut);
  if (opacity <= 0) return null;
  if (scene.kind === 'shot' && scene.file) return <ShotLayer scene={scene} index={index} t={t} opacity={opacity} k={k} />;

  const motion = scene.motion ?? MOTIONS[index % MOTIONS.length];
  const pulse = 1 + 0.012 * beatPulse(t);
  let scale = 1.08;
  let x = 0;
  if (motion === 'zoom-in') scale = interpolate(k, [0, 1], [1.05, 1.18]);
  if (motion === 'zoom-out') scale = interpolate(k, [0, 1], [1.18, 1.05]);
  if (motion === 'pan-left') x = interpolate(k, [0, 1], [40, -40]);
  if (motion === 'pan-right') x = interpolate(k, [0, 1], [-40, 40]);
  if (motion === 'still') scale = 1;
  const transform = `translateX(${x}px) scale(${scale * pulse})`;
  const fill: React.CSSProperties = { width: '100%', height: '100%', objectFit: 'cover', transform };

  let media: React.ReactNode;
  if (!scene.file) {
    // Not generated yet: a labeled placeholder, so the timing can be previewed before spending Buzz.
    media = (
      <AbsoluteFill
        style={{
          background: `linear-gradient(135deg, ${S.palette[index % S.palette.length]}55, #0b0b14)`,
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily,
          color: '#fff',
          fontSize: 48,
          padding: 120,
          textAlign: 'center',
        }}
      >
        {scene.id}: {scene.prompt ?? '(no prompt yet)'}
      </AbsoluteFill>
    );
  } else if (isVideo(scene.file)) {
    const from = Math.round(scene.from * FPS);
    const dur = Math.max(1, Math.round((scene.to - scene.from + FADE) * FPS));
    const clipFrames = Math.max(1, Math.round((scene.clipSeconds ?? len) * FPS));
    media = (
      <Sequence from={from} durationInFrames={dur} layout="none">
        <Loop durationInFrames={clipFrames} layout="none">
          <OffthreadVideo src={staticFile(scene.file)} muted style={fill} />
        </Loop>
      </Sequence>
    );
  } else {
    media = <Img src={staticFile(scene.file)} style={fill} />;
  }

  return <AbsoluteFill style={{ opacity, overflow: 'hidden', background: '#000' }}>{media}</AbsoluteFill>;
};

// ---------- title card ----------

const TitleCard: React.FC<{ t: number; at: number; leave: number; text: string; sub?: string }> = ({ t, at, leave, text, sub }) => {
  const k = spring({ frame: Math.round((t - at) * FPS), fps: FPS, config: { damping: 12, stiffness: 120 } });
  const out = ease(ramp(t, leave, leave + 0.5));
  if (t < at || out >= 1) return null;
  const [a, b, c] = [S.palette[0], S.palette[1 % S.palette.length], S.palette[2 % S.palette.length]];
  return (
    <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', opacity: 1 - out }}>
      <div
        style={{
          fontFamily,
          fontWeight: 700,
          fontSize: 150,
          lineHeight: 1,
          textAlign: 'center',
          maxWidth: 1700,
          background: `linear-gradient(90deg, ${a}, ${b} 50%, ${c})`,
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          WebkitTextStroke: '3px rgba(255,255,255,.9)',
          filter: 'drop-shadow(0 8px 24px rgba(0,0,0,.7))',
          transform: `scale(${k}) translateY(${-out * 60}px)`,
        }}
      >
        {text}
      </div>
      {sub ? (
        <div
          style={{
            marginTop: 28,
            fontFamily,
            fontWeight: 600,
            fontSize: 56,
            color: '#fff',
            opacity: ramp(t, at + 0.4, at + 0.8),
            textShadow: '0 4px 18px rgba(0,0,0,.8)',
          }}
        >
          {sub}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};

// ---------- karaoke lyrics ----------
// The .lrc gives a start time per line, not per word, so words light up evenly across the line.

const Lyrics: React.FC<{ t: number }> = ({ t }) => {
  const line = LINES.find((l) => t >= l.start - 0.25 && t < l.end + 0.35);
  if (!line) return null;
  const words = line.text.split(/\s+/).filter(Boolean);
  const per = (line.end - line.start) / Math.max(1, words.length);
  const op = Math.min(ramp(t, line.start - 0.25, line.start - 0.05), 1 - ramp(t, line.end + 0.15, line.end + 0.35));
  return (
    <AbsoluteFill style={{ justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 60 }}>
      <div
        style={{
          maxWidth: 1500,
          padding: '16px 38px',
          borderRadius: 28,
          background: 'rgba(8, 8, 18, 0.72)',
          textAlign: 'center',
          fontFamily,
          fontWeight: 700,
          fontSize: 64,
          lineHeight: 1.15,
          opacity: op,
          transform: `translateY(${(1 - op) * 24}px)`,
          textShadow: '0 4px 0 rgba(0,0,0,0.35)',
        }}
      >
        {words.map((w, i) => {
          const ws = line.start + i * per;
          const s = interpolate(t, [ws, ws + 0.12, ws + 0.3], [1, 1.08, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
          return (
            <span
              key={i}
              style={{
                display: 'inline-block',
                margin: '0 14px',
                transformOrigin: '50% 80%',
                color: t >= ws ? S.palette[i % S.palette.length] : '#fff',
                transform: `scale(${s})`,
              }}
            >
              {w}
            </span>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// ---------- the video ----------

export const MusicVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const t = frame / FPS;
  const titleSeconds = S.titleSeconds ?? 3.5;
  return (
    <AbsoluteFill style={{ background: '#000' }}>
      <Audio src={staticFile(S.song)} />
      {SCENES.map((s, i) =>
        t >= s.from - FADE && t < s.to + FADE ? <SceneLayer key={s.id} scene={s} index={i} t={t} /> : null,
      )}
      {/* a soft vignette keeps the lyrics and title readable on bright images */}
      <AbsoluteFill style={{ background: 'radial-gradient(ellipse at 50% 45%, transparent 55%, rgba(0,0,0,.55) 100%)' }} />
      {titleSeconds > 0 ? <TitleCard t={t} at={0.2} leave={titleSeconds} text={S.title} sub={S.subtitle} /> : null}
      {S.outro ? <TitleCard t={t} at={S.outro.from} leave={S.duration + 1} text={S.title} sub={S.outro.text} /> : null}
      <Lyrics t={t} />
    </AbsoluteFill>
  );
};
