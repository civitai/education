import React from 'react';
import { Composition } from 'remotion';
import { FPS, MusicVideo } from './Video';
import video from '../video.json';

export const Root: React.FC = () => (
  <Composition
    id="MusicVideo"
    component={MusicVideo}
    durationInFrames={Math.ceil(video.duration * FPS)}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
