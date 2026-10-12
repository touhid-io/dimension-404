# Spatial Reality — A cinematic journey through dimensions

A 125-second Bengali educational animation rendered in Three.js. One initial play click starts the film and unlocks browser audio; everything after that is automatic. There are no lesson cards, pause buttons or next/previous controls. Replay appears only at the end.

## Visual story

The ten shots use moving cameras and geometry to tell the story: a pulsing origin, a growing line and moving coordinate, an unfolding plane, an extruding transparent cube, right-angle markers, a rotating fourth-direction candidate with measured angles, three components collapsing under orthogonality constraints, a rotating 4D tesseract projected into 3D, two events at the same location at different times, and an open-ended conclusion.

Brief Bengali titles and subtitles support the visuals. Synthetic ambient chords and scene cues accompany the film when audio is available. The film remains functional without audio. Reduced-motion preferences reduce camera and background motion; playback pauses automatically when its tab is hidden.

## Scientific scope

In Euclidean 3D, a vector perpendicular to all three standard axes has all three components zero. A zero vector has no direction and cannot be a new axis. The animation illustrates this with the three component constraints, not with a staged computer crash.

Four-dimensional mathematical space is a valid construction. The 16 tesseract vertices are rotated in X–W and Y–W planes and perspective-projected into 3D; the result is explicitly labeled as a projection. It is not a direct rendering of four spatial dimensions. The separate time shot identifies events using three spatial coordinates plus time.

This film does not establish whether extra spatial dimensions physically exist, or make claims about life or gravity in higher-dimensional worlds. MIT Linear Algebra and Einstein Online references are linked on the end screen.

## Build and run

```sh
npm ci
npm run build
python3 -m http.server 8000 --directory dist
```

Open `http://localhost:8000` and click **চলচ্চিত্র শুরু করো**. Edit `src/simulation.js` to change the scenes and rebuild the checked-in `assets/simulation.js` bundle. Vercel builds and serves `dist/` using `vercel.json`.

Three.js, GSAP and licensed Tiro Bangla fonts are served locally. No runtime JavaScript or font CDN is required. The font license is in `assets/fonts/OFL.txt`.
