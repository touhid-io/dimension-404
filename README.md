# 🌌 Spatial Reality // The 3D Proof

A highly cinematic, interactive 3D visualization that mathematically and visually proves why a 4th spatial dimension (at a 90-degree angle to X, Y, and Z) is impossible in our physical universe. 

This project transforms a simple geometric concept into an IMAX-style sci-fi experience using cutting-edge web technologies.

## ✨ Features
- **Cinematic Auto-Sequencer:** A zero-interaction, movie-like automated camera and storytelling flow.
- **Motion Physics:** Smooth, weight-driven camera movements powered by GSAP.
- **Custom VFX Shaders:** Features realistic Chromatic Aberration (RGB split) and Film Grain for that deep-space cinematic look.
- **Spatial 3D Audio:** Uses Web Audio API with `PannerNode` for HRTF spatial sound (sounds move between your left and right headphones).
- **Terminal Reboot Sequence:** A system-crash climax followed by a hacker-style terminal log explaining the actual physics (Einstein's Relativity & Gravity).

## 🛠 Tech Stack
- **Three.js** (WebGL 3D Rendering & Post-processing)
- **GSAP** (Advanced Animation & Easing)
- **Web Audio API** (Real-time sound synthesis)
- **HTML5 & CSS3** (Kinetic typography and UI)

## 🚀 Live Demo
[Watch the Cinematic Experience Here](https://your-project-name.vercel.app) *(Headphones highly recommended)*

---
*Built to explore the boundaries of web-based spatial storytelling.*

## Run and build

The checked-in `assets/simulation.js` bundle includes Three.js, its effects and GSAP. The simulation has no runtime JavaScript CDN dependency and can be hosted as a static site.

```sh
npm ci
npm run build
python3 -m http.server 8000
```

Open `http://localhost:8000`, wait for Ready, then click **Initialize Simulation**. Audio starts on this click and remains optional if the browser cannot enable audio. **Replay Simulation** appears after the terminal sequence. For source changes, edit `src/simulation.js` and rebuild the checked-in bundle.
