# Spatial Reality — A guided lesson in dimensions

A cinematic, Bengali explanation of coordinates and dimensions for secondary-school learners. The lesson shows a point, a line, a plane and a cube; labels X/Y/Z; marks right angles; and measures the angles between a candidate fourth direction and the three existing axes.

The learner can pause, go back, advance manually, mute audio and replay. Autoplay leaves each explanation visible for reading. Camera transitions and ambient motion respect reduced-motion preferences.

## What the lesson demonstrates

Within Euclidean 3D space, a vector perpendicular to all three standard basis vectors must have all three components zero. The zero vector has no direction and cannot be a new axis. Rotating a candidate line illustrates the problem; the component argument explains it.

This does **not** prove that additional spatial dimensions are physically impossible. Four-dimensional mathematical spaces are valid constructions. The separate spacetime section describes an event using three spatial coordinates and one time coordinate; it does not treat time as an extra ordinary spatial arrow. The old claims about gravity, life and universal impossibility have been removed.

## Run and build

```sh
npm ci
npm run build
python3 -m http.server 8000 --directory dist
```

Open `http://localhost:8000`, wait for readiness, then click **শেখা শুরু করো**. Edit `src/simulation.js` for lesson content and scenes, and rebuild the checked-in `assets/simulation.js` bundle. Vercel builds and serves `dist/` using `vercel.json`.

Three.js and GSAP are bundled locally. Bengali and Latin Tiro Bangla WOFF2 fonts are hosted locally with their SIL Open Font License in `assets/fonts/OFL.txt`; no JavaScript or font CDN is needed during playback. Audio is optional and created only after the start click.

## Educational references

- [MIT Linear Algebra notes](https://web.mit.edu/~linalg/webpage/Spring21/Lecture%20notes.pdf): independence, dimensions, orthogonality and dot products.
- [Einstein Online — Spacetime](https://www.einstein-online.info/en/explandict/spacetime/): spatial coordinates and time coordinates.
- [Einstein Online — Extra dimensions](https://www.einstein-online.info/en/spotlight/hiding_extra_dimensions/): the distinction between everyday space and possible additional dimensions.
