# Positive control: civitai-cosmetics skill (temporary, removed before the PR merges)

Generates 3 stickers + 1 badge on Civitai, cuts them out, sizes and checks them. Cap: 300 Buzz.
Nothing is submitted to the shop. Needs Node 18+; ffmpeg only for step 6.

```bash
git fetch origin cosmetics-guide && git checkout <sha I mail you>    # or a worktree
SKILL_DIR=$PWD/public/skills/civitai-cosmetics

# 1. Set folder with the example set.json (owl-wave, owl-sleepy, owl-wow stickers + owl-badge)
node $SKILL_DIR/scripts/setup.mjs ~/cosmetics-test && cd ~/cosmetics-test
#    expected: "ok Node.js 18+", "ok CIVITAI_API_KEY" once the key is set, ffmpeg "ok" or "optional"
export CIVITAI_API_KEY=...        # or a .env file in ~/cosmetics-test

# 2. Price only (spends nothing)
node $SKILL_DIR/scripts/gen.mjs
#    expected: "4 image(s): owl-wave, owl-sleepy, owl-wow, owl-badge" and "quoted: N Buzz".
#    Earlier runs priced gpt-image-2.5-flare at 69 per 1024x1024 image, so N should be about 276.
#    STOP if N > 300 and mail me the line.

# 3. Generate, hard-capped at 300
node $SKILL_DIR/scripts/gen.mjs --go --max-buzz 300
#    expected: raw/<id>.png x4, "workflow ...: succeeded, billed N Buzz (set total N)", buzz-log.json

# 4. Cut out + check + contact sheet
node $SKILL_DIR/scripts/cutout.mjs
node $SKILL_DIR/scripts/check.mjs ; echo "check exit $?"
node $SKILL_DIR/scripts/sheet.mjs
#    expected: out/owl-*.png (stickers 512 on the long edge, badge 256x256), "4/4 file(s) pass.",
#    check exit 0, sheet.png

# 5. Negative control (proves check.mjs can fail): a raw, un-cut image is not transparent
node $SKILL_DIR/scripts/check.mjs raw/owl-wave.png --type sticker ; echo "exit $?"
#    expected: FAIL on "Transparent background" (and on size: 1024 is over 512), exit 1

# 6. Optional, needs ffmpeg with libwebp
node $SKILL_DIR/scripts/animate.mjs owl-badge --effect shine
node $SKILL_DIR/scripts/check.mjs
#    expected: out/owl-badge.webp, "4/4 file(s) pass." (the badge row now checks the .webp)
```

Please send back: the console output of steps 2 to 6, `buzz-log.json`, `sheet.png`, and the files in
`raw/` and `out/`. If an image looks wrong in `sheet.png` (haze, fringe, cut-off art), say which, and
whether `"tolerance"` changes fixed it, without regenerating.
