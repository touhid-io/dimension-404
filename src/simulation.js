import { gsap } from 'gsap';
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { FilmPass } from 'three/addons/postprocessing/FilmPass.js';

export const FILM_DURATION = 125;
export const FILM_SCENES = [
  { at: 0, name: 'THE POINT', title: 'সবকিছুর শুরু। একটি বিন্দু।', subtitle: 'অবস্থান আছে। চলার স্বাধীন দিক এখনও নেই।' },
  { at: 8, name: 'ONE DIRECTION', title: 'একটি পথ। একটি সংখ্যা।', subtitle: 'রেখায় কোথায় আছো, শুধু x বললেই হয়।' },
  { at: 20, name: 'THE PLANE', title: 'আরেকটি দিক খুলে গেল।', subtitle: 'ডানে কতটা, ওপরে কতটা—দুটি সংখ্যা মিলে একটি অবস্থান।' },
  { at: 34, name: 'THE VOLUME', title: 'সমতল থেকে উঠে এলো উচ্চতা।', subtitle: 'দৈর্ঘ্য, প্রস্থ, উচ্চতা। অবস্থানের জন্য এবার তিনটি সংখ্যা।' },
  { at: 48, name: 'RIGHT ANGLES', title: 'তিন দিক। তিনটি সমকোণ।', subtitle: 'প্রতিটি অক্ষ অন্য দুটির সঙ্গে ৯০° কোণে।' },
  { at: 59, name: 'THE FOURTH ATTEMPT', title: 'চতুর্থ স্বাধীন দিকটি কোথায়?', subtitle: 'হলুদ রেখা ঘোরে। তিনটি কোণই কি একসঙ্গে ৯০° হবে?' },
  { at: 73, name: 'THE CONSTRAINT', title: 'তিনটি শর্ত। ক্রমে শূন্য।', subtitle: 'X, Y, Z—প্রতিটির সঙ্গে লম্ব হওয়ার শর্তটি দেখি।' },
  { at: 89, name: 'BEYOND THE FRAME', title: 'গণিতের জগৎ এখানেই শেষ নয়।', subtitle: 'চার মাত্রায় চারটি স্থানাঙ্ক। এটি ৪D ঘনকের একটি ৩D প্রক্ষেপণ।' },
  { at: 104, name: 'WHERE AND WHEN', title: 'একই স্থান। ভিন্ন সময়।', subtitle: 'ঘটনা চিহ্নিত করতে “কোথায়”-এর সঙ্গে “কখন”-ও লাগে।' },
  { at: 116, name: 'AN OPEN QUESTION', title: 'তিনটি দিক। আরও বড় প্রশ্ন।', subtitle: 'এই 3D স্থানের সীমা দেখলাম—মহাবিশ্বের সব সম্ভাবনার সীমা নয়।' }
];
const clamp01 = x => Math.max(0, Math.min(1, x));
const ease = x => { x = clamp01(x); return x * x * (3 - 2 * x); };
const phase = (time, from, to) => ease((time - from) / (to - from));
export function anglesToAxes(vector) {
  const length = Math.hypot(...vector);
  if (length < 1e-8) return null;
  return vector.map(component => Math.acos(Math.max(-1, Math.min(1, component / length))) * 180 / Math.PI);
}
export function projectTesseract(angle) {
  const c = Math.cos(angle), s = Math.sin(angle), c2 = Math.cos(angle * 0.6), s2 = Math.sin(angle * 0.6);
  return Array.from({ length: 16 }, (_, n) => {
    let x = n & 1 ? 1 : -1, y = n & 2 ? 1 : -1;
    const z = n & 4 ? 1 : -1;
    let w = n & 8 ? 1 : -1;
    [x, w] = [x * c - w * s, x * s + w * c];
    [y, w] = [y * c2 - w * s2, y * s2 + w * c2];
    const perspective = 4 / (4 - w);
    return [x * perspective, y * perspective, z * perspective];
  });
}

export function initializeSimulation() {
  const el = id => document.getElementById(id);
  const container = el('canvas-container');
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x02050c);
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 200);
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, window.innerWidth < 600 ? 1.25 : 1.5));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  container.appendChild(renderer.domElement);
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.95, 0.45, 0.2);
  composer.addPass(bloom);
  composer.addPass(new FilmPass(0.09, false));
  const geometryGroup = new THREE.Group(); scene.add(geometryGroup);
  const up = new THREE.Vector3(0, 1, 0);
  const directions = [new THREE.Vector3(1, 0, 0), up.clone(), new THREE.Vector3(0, 0, 1)];
  const colors = [0xff6c86, 0x60edbf, 0x6faaff];
  const colorCSS = ['#ff93a6', '#85f4cf', '#9cc6ff'];
  const dust = new THREE.Points(
    new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(
      Array.from({ length: 3600 }, () => (Math.random() - 0.5) * 95), 3)),
    new THREE.PointsMaterial({ color: 0x8194b6, size: 0.025, transparent: true, opacity: 0.4, depthWrite: false })
  ); scene.add(dust);
  function mesh(geometry, color, opacity = 1) {
    const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity, depthWrite: opacity === 1 });
    const object = new THREE.Mesh(geometry, material); geometryGroup.add(object); return object;
  }
  const origin = mesh(new THREE.SphereGeometry(0.07, 24, 24), 0xffffff);
  const point = mesh(new THREE.SphereGeometry(0.09, 24, 24), 0xffedc1);
  function beam(color, radius = 0.018) {
    const geometry = new THREE.CylinderGeometry(radius, radius, 1, 12); geometry.translate(0, 0.5, 0);
    return mesh(geometry, color);
  }
  const axes = colors.map((color, n) => {
    const object = beam(color); object.quaternion.setFromUnitVectors(up, directions[n]); return object;
  });
  const arrowheads = colors.map((color, n) => {
    const object = mesh(new THREE.ConeGeometry(0.09, 0.25, 16), color);
    object.quaternion.setFromUnitVectors(up, directions[n]); return object;
  });
  function lines(points, color, opacity = 1, segments = false) {
    const geometry = new THREE.BufferGeometry().setFromPoints(points.map(p => new THREE.Vector3(...p)));
    const material = new THREE.LineBasicMaterial({ color, transparent: true, opacity, depthWrite: false });
    const object = segments ? new THREE.LineSegments(geometry, material) : new THREE.Line(geometry, material);
    geometryGroup.add(object); return object;
  }
  const grid = new THREE.Group(); geometryGroup.add(grid);
  for (let n = 0; n <= 4; n++) {
    for (const points of [[[n, 0, 0], [n, 4, 0]], [[0, n, 0], [4, n, 0]]]) {
      const line = lines(points, 0x50b99d, 0.32); grid.add(line);
    }
  }
  const plane = mesh(new THREE.PlaneGeometry(4, 4), 0x37b9b0, 0.13); plane.material.side = THREE.DoubleSide;
  plane.position.set(2, 2, 0);
  const cube = lines([], 0x9fc4ff, 0.7, true);
  cube.geometry.dispose(); cube.geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(4, 4, 4)); cube.position.set(2, 2, 0);
  const volume = mesh(new THREE.BoxGeometry(4, 4, 4), 0x4685c7, 0.055); volume.position.set(2, 2, 0);
  const candidate = beam(0xffc56a, 0.025);
  const candidateHead = mesh(new THREE.ConeGeometry(0.11, 0.27, 16), 0xffc56a);
  const componentBeams = colors.map(color => beam(color, 0.014));
  const projectionGuides = lines(Array.from({ length: 6 }, () => [0, 0, 0]), 0xffedc1, 0.55, true);
  const guideArray = projectionGuides.geometry.attributes.position;
  const marks = [
    lines([[0.6, 0, 0], [0.6, 0.6, 0], [0, 0.6, 0]], 0xffedc1),
    lines([[0, 0.6, 0], [0, 0.6, 0.6], [0, 0, 0.6]], 0xffedc1),
    lines([[0.6, 0, 0], [0.6, 0, 0.6], [0, 0, 0.6]], 0xffedc1)
  ];
  const waveRings = Array.from({ length: 3 }, () => {
    const object = mesh(new THREE.RingGeometry(0.96, 1, 80), 0x8cbcff, 0); object.material.side = THREE.DoubleSide; return object;
  });
  const tesseractEdges = [];
  for (let a = 0; a < 16; a++) for (let bit = 0; bit < 4; bit++) {
    const b = a ^ (1 << bit); if (a < b) tesseractEdges.push([a, b]);
  }
  const tesseract = lines(Array.from({ length: 64 }, () => [0, 0, 0]), 0xace0ff, 0.85, true);
  const tesseractVertices = tesseract.geometry.attributes.position;
  const tessPoints = new THREE.Points(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(48), 3)),
    new THREE.PointsMaterial({ color: 0xffe6b7, size: 0.07, transparent: true })); geometryGroup.add(tessPoints);
  const constraints = [mesh(new THREE.PlaneGeometry(4, 4), colors[0], 0), mesh(new THREE.PlaneGeometry(4, 4), colors[1], 0)];
  constraints[0].rotation.y = Math.PI / 2; constraints[0].position.set(0, 2, 2);
  constraints[1].rotation.x = Math.PI / 2; constraints[1].position.set(0, 0, 2);
  constraints.forEach(object => { object.material.side = THREE.DoubleSide; object.material.depthWrite = false; });

  const playhead = { time: 0 };
  let timeline = null, started = false, complete = false, running = true, currentScene = -1;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let audioCtx = null, audioMaster = null, audioNodes = [];
  function startAudio() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      audioCtx ||= new AudioContext(); audioCtx.resume().catch(() => {});
      audioMaster = audioCtx.createGain(); audioMaster.gain.value = 0;
      audioMaster.connect(audioCtx.destination); audioMaster.gain.linearRampToValueAtTime(0.22, audioCtx.currentTime + 2);
      audioNodes = [55, 82.4069, 110].map((frequency, n) => {
        const osc = audioCtx.createOscillator(), gain = audioCtx.createGain();
        osc.type = 'sine'; osc.frequency.value = frequency; gain.gain.value = n === 0 ? 0.32 : 0.09;
        osc.connect(gain); gain.connect(audioMaster); osc.start(); return { osc, gain };
      });
    } catch (error) { console.warn('Audio unavailable; the film continues visually.', error); }
  }
  function stopAudio() {
    if (!audioMaster) return;
    audioMaster.gain.cancelScheduledValues(audioCtx.currentTime);
    audioMaster.gain.setTargetAtTime(0, audioCtx.currentTime, 0.35);
    for (const node of audioNodes) node.osc.stop(audioCtx.currentTime + 2);
    audioNodes = []; audioMaster = null;
  }
  function cue(sceneIndex) {
    if (!audioMaster || audioCtx.state !== 'running') return;
    const osc = audioCtx.createOscillator(), gain = audioCtx.createGain();
    osc.type = 'triangle'; osc.frequency.value = [220, 277.18, 329.63, 440][sceneIndex % 4];
    gain.gain.value = 0; gain.gain.linearRampToValueAtTime(0.065, audioCtx.currentTime + 0.09);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.6);
    osc.connect(gain); gain.connect(audioMaster); osc.start(); osc.stop(audioCtx.currentTime + 1.7);
  }
  const labels = [
    ['label-x', new THREE.Vector3(6.4, 0, 0)], ['label-y', new THREE.Vector3(0, 6.4, 0)],
    ['label-z', new THREE.Vector3(0, 0, 6.4)], ['label-point', point.position],
    ['label-w', new THREE.Vector3()], ['angle-xy', new THREE.Vector3(0.85, 0.85, 0)],
    ['angle-yz', new THREE.Vector3(0, 0.85, 0.85)], ['angle-zx', new THREE.Vector3(0.85, 0, 0.85)]
  ];
  const proofValues = [el('component-a'), el('component-b'), el('component-c')];
  const cameraPaths = [
    [[1.7, 0.8, 3.5], [5, 2, 9]], [[5, 2, 9], [4, 1, 11]], [[4, 1, 11], [2, 2, 13]],
    [[2, 2, 13], [11, 9, 12]], [[11, 9, 12], [9, 7, 11]], [[9, 7, 11], [10, 7, 13]],
    [[10, 7, 13], [8, 5, 10]], [[8, 5, 10], [7, 4, 10]], [[7, 4, 10], [10, 7, 12]],
    [[10, 7, 12], [12, 8, 16]]
  ];
  const targetPaths = [
    [[0, 0, 0], [0, 0, 0]], [[0, 0, 0], [2, 0, 0]], [[2, 0, 0], [2, 2, 0]],
    [[2, 2, 0], [2, 2, 2]], [[2, 2, 2], [1.4, 1.4, 1.4]], [[1.4, 1.4, 1.4], [2, 2, 2]],
    [[2, 2, 2], [0, 0, 0]], [[0, 0, 0], [0, 0, 0]], [[0, 0, 0], [2, 2, 2]],
    [[2, 2, 2], [0, 0, 0]]
  ];
  const aim = new THREE.Vector3(), temp = new THREE.Vector3(), direction = new THREE.Vector3(), projected = new THREE.Vector3();
  function drawBeam(object, start, end) {
    object.position.copy(start); direction.copy(end).sub(start);
    const length = direction.length(); object.visible = length > 0.005;
    object.scale.y = Math.max(0.0001, length);
    if (length > 0.005) object.quaternion.setFromUnitVectors(up, direction.normalize());
  }
  function updateTesseract(t, opacity) {
    const points = projectTesseract(reduceMotion ? 0.3 : (t - 89) * 0.16);
    tesseract.visible = tessPoints.visible = opacity > 0;
    tesseract.material.opacity = opacity;
    tessPoints.material.opacity = opacity;
    tesseractEdges.forEach(([a, b], n) => { tesseractVertices.setXYZ(n * 2, ...points[a]); tesseractVertices.setXYZ(n * 2 + 1, ...points[b]); });
    points.forEach((p, n) => tessPoints.geometry.attributes.position.setXYZ(n, ...p));
    tesseractVertices.needsUpdate = tessPoints.geometry.attributes.position.needsUpdate = true;
    tesseract.geometry.computeBoundingSphere(); tessPoints.geometry.computeBoundingSphere();
    const scale = 1.55 * phase(t, 89, 93); tesseract.scale.setScalar(scale); tessPoints.scale.setScalar(scale);
  }
  function updateFilm(t) {
    const sceneIndex = FILM_SCENES.reduce((n, shot, i) => t >= shot.at ? i : n, 0);
    const shot = FILM_SCENES[sceneIndex];
    const end = FILM_SCENES[sceneIndex + 1]?.at ?? FILM_DURATION;
    const local = t - shot.at, progress = (t - shot.at) / (end - shot.at);
    if (currentScene !== sceneIndex) {
      currentScene = sceneIndex;
      el('scene-name').textContent = shot.name;
      el('scene-number').textContent = `${String(sceneIndex + 1).padStart(2, '0')} / 10`;
      el('film-title').textContent = shot.title; el('film-subtitle').textContent = shot.subtitle;
      el('captions').classList.remove('reveal'); void el('captions').offsetWidth; el('captions').classList.add('reveal');
      cue(sceneIndex);
    }
    el('progress-fill').style.width = `${clamp01(t / FILM_DURATION) * 100}%`;
    const [cameraFrom, cameraTo] = cameraPaths[sceneIndex], [targetFrom, targetTo] = targetPaths[sceneIndex];
    const p = reduceMotion ? 1 : phase(t, shot.at, shot.at + 3.2);
    aim.fromArray(targetFrom).lerp(temp.fromArray(targetTo), p);
    camera.position.fromArray(cameraFrom).lerp(temp.fromArray(cameraTo), p);
    if (!reduceMotion && local > 3.2) {
      camera.position.sub(aim).applyAxisAngle(sceneIndex < 3 ? up : directions[2], Math.sin(progress * Math.PI) * 0.055).add(aim);
    }
    const fit = Math.max(1.17, 1 / camera.aspect);
    camera.position.sub(aim).multiplyScalar(fit).add(aim);
    const tilt = phase(t, 35, 43);
    camera.up.set(0, 1 - tilt, tilt).normalize(); camera.lookAt(aim); camera.updateMatrixWorld();
    const shapeOpacity = t < 89 ? 1 : t < 104 ? 1 - phase(t, 89, 92) : t < 116 ? phase(t, 104, 107) : 1 - phase(t, 116, 120);
    origin.visible = shapeOpacity > 0.01; origin.material.opacity = shapeOpacity;
    origin.scale.setScalar(t < 8 ? 0.8 + Math.sin(t * 1.7) * 0.12 : 1);
    const proofFit = t >= 73 && t < 89 ? 1 - 0.2 * phase(t, 73, 75) : 1;
    const lengths = [6 * phase(t, 8, 12), 6 * phase(t, 20, 24), 6 * phase(t, 34, 39)].map(length => length * proofFit);
    axes.forEach((axis, n) => {
      axis.visible = lengths[n] > 0.01 && shapeOpacity > 0.01; axis.scale.y = Math.max(lengths[n], 0.0001);
      axis.material.opacity = shapeOpacity;
      arrowheads[n].visible = axis.visible; arrowheads[n].position.copy(directions[n]).multiplyScalar(lengths[n]);
      arrowheads[n].material.opacity = shapeOpacity;
      labels[n][1].copy(directions[n]).multiplyScalar(lengths[n] + 0.35);
      el(`label-${'xyz'[n]}`).hidden = !axis.visible || t < [11, 23, 38][n];
    });
    const planeReveal = phase(t, 21, 26);
    plane.visible = grid.visible = t >= 20 && t < 59 || t >= 104 && t < 116;
    plane.position.set(2 * planeReveal, 2 * planeReveal, 0);
    plane.scale.set(planeReveal, planeReveal, 1); plane.material.opacity = 0.13 * shapeOpacity;
    grid.scale.set(planeReveal, planeReveal, 1);
    const depth = t < 104 ? phase(t, 35, 42) : 1;
    cube.visible = volume.visible = t >= 34 && t < 59 || t >= 104 && t < 116;
    cube.scale.z = volume.scale.z = Math.max(depth, 0.0001); cube.position.z = volume.position.z = depth * 2;
    cube.material.opacity = 0.68 * shapeOpacity; volume.material.opacity = 0.06 * shapeOpacity;
    point.visible = t >= 11 && t < 48 || t >= 104 && t < 116;
    point.position.set(3 * phase(t, 11, 16), t < 34 ? 2 * phase(t, 26, 30) : 2, t < 104 ? 2 * phase(t, 41, 45) : 2);
    el('label-point').hidden = !point.visible;
    const coordinates = point.position.toArray().map(value => Number(value.toFixed(1)));
    el('label-point').textContent = t < 20 ? `x = ${coordinates[0]}` : t < 34 ? `(${coordinates[0]}, ${coordinates[1]})` : t < 104 ? `(${coordinates.join(', ')})` : t < 109 ? 'A · t = 0 s' : 'B · t = 5 s';
    projectionGuides.visible = point.visible;
    const v = point.position;
    [[0, 0, 0], [v.x, 0, 0], [v.x, 0, 0], [v.x, v.y, 0], [v.x, v.y, 0], [v.x, v.y, v.z]].forEach((p, n) => guideArray.setXYZ(n, ...p));
    guideArray.needsUpdate = true; projectionGuides.geometry.computeBoundingSphere();
    marks.forEach((mark, n) => {
      mark.visible = t >= [22, 48, 48][n] && t < 73;
      const emphasis = sceneIndex === 4 ? Math.floor(local / 3.5) % 3 : 0;
      mark.material.opacity = sceneIndex === 4 && emphasis !== n ? 0.3 : 1;
      el(['angle-xy', 'angle-yz', 'angle-zx'][n]).hidden = !mark.visible || t < (n === 0 ? 22 : 48);
    });
    candidate.visible = candidateHead.visible = t >= 59 && t < 86;
    el('label-w').hidden = !candidate.visible;
    el('angle-readout').hidden = t < 59 || t >= 73;
    el('component-readout').hidden = t < 73 || t >= 89;
    el('equation').hidden = ![1, 2, 3, 6, 7, 8].includes(sceneIndex);
    const w = new THREE.Vector3();
    if (t >= 59 && t < 73) {
      const spin = reduceMotion ? 0.8 : local * 0.85;
      w.set(Math.cos(spin), 0.45 + Math.sin(spin * 0.7), Math.sin(spin)).normalize();
      const align = phase(t, 67, 70);
      w.lerp(directions[2], align).normalize().multiplyScalar(5.8);
      const angles = anglesToAxes([w.x, w.y, w.z]);
      el('angle-values').textContent = angles.map((a, n) => `${'XYZ'[n]} ${a.toFixed(0)}°`).join('   ');
      el('angle-label').textContent = t < 70 ? 'W-এর সঙ্গে তিন অক্ষের কোণ' : '৯০° · ৯০° · ০° — W এখন Z-এরই দিক';
      if (t >= 70) { el('film-title').textContent = 'দুটির সঙ্গে লম্ব। তৃতীয়টিরই পথ।'; el('film-subtitle').textContent = 'X ও Y-এর সঙ্গে লম্ব হলে W, Z-এর দিকেই এসে পড়ে। নতুন স্বাধীন অক্ষ হয় না।'; }
    }
    if (t >= 73 && t < 89) {
      const components = [3 * (1 - phase(t, 75, 78)), 2 * (1 - phase(t, 79, 82)), 2 * (1 - phase(t, 83, 86))];
      w.fromArray(components);
      proofValues.forEach((element, n) => { element.textContent = `${'abc'[n]} = ${components[n].toFixed(1)}`; element.classList.toggle('locked', components[n] < 0.005); element.style.color = colorCSS[n]; });
      const ends = [new THREE.Vector3(components[0], 0, 0), new THREE.Vector3(components[0], components[1], 0), w.clone()];
      componentBeams.forEach((object, n) => drawBeam(object, n ? ends[n - 1] : new THREE.Vector3(), ends[n]));
      constraints[0].material.opacity = t < 79 ? 0.12 * phase(t, 74, 75) : 0;
      constraints[1].material.opacity = t >= 79 && t < 83 ? 0.12 : 0;
      el('equation').textContent = t < 79 ? 'W ⟂ X  ⇒  a = 0' : t < 83 ? 'W ⟂ Y  ⇒  b = 0' : t < 86 ? 'W ⟂ Z  ⇒  c = 0' : 'W = (0, 0, 0)';
      if (t >= 86) { el('film-title').textContent = 'সব উপাংশ শূন্য। কোনো দিক নেই।'; el('film-subtitle').textContent = 'তাই এই 3D স্থানে তিন অক্ষের সঙ্গে লম্ব নতুন অশূন্য ভেক্টর পাওয়া যায় না।'; }
    } else {
      componentBeams.forEach(object => { object.visible = false; });
      constraints.forEach(object => { object.material.opacity = 0; });
    }
    if (candidate.visible) {
      drawBeam(candidate, new THREE.Vector3(), w);
      candidateHead.visible = candidate.visible; candidateHead.position.copy(w); candidateHead.quaternion.copy(candidate.quaternion);
      labels[4][1].copy(w).multiplyScalar(0.88);
    }
    if (sceneIndex === 1) el('equation').textContent = '1D   ·   (x)';
    if (sceneIndex === 2) el('equation').textContent = '2D   ·   (x, y)';
    if (sceneIndex === 3) el('equation').textContent = '3D   ·   (x, y, z)';
    if (sceneIndex === 7) el('equation').textContent = '4D   ·   (x, y, z, w)';
    if (sceneIndex === 8) el('equation').textContent = 'স্থান + সময়   ·   (x, y, z, t)';
    const tessOpacity = t >= 89 && t < 104 ? 0.85 * phase(t, 89, 92) * (1 - phase(t, 101, 104)) : t >= 116 ? 0.32 * phase(t, 116, 120) : 0;
    updateTesseract(t, tessOpacity);
    waveRings.forEach((ring, n) => {
      const active = t < 8 || t >= 104 && t < 116;
      ring.visible = active;
      if (active) {
        const cycle = ((t < 8 ? t : t - 104) + n * 0.65) % 2.2 / 2.2;
        ring.position.copy(t < 8 ? origin.position : point.position); ring.quaternion.copy(camera.quaternion);
        ring.scale.setScalar(0.2 + cycle * (t < 8 ? 1.8 : 1.1));
        ring.material.opacity = (1 - cycle) * 0.3;
        ring.material.color.setHex(t >= 109 ? 0xffc56a : 0x8cbcff);
      }
    });
    if (!reduceMotion) dust.rotation.y = t * 0.009;
    for (const [id, position] of labels) {
      const label = el(id); if (label.hidden) continue;
      projected.copy(position).project(camera);
      label.style.left = `${THREE.MathUtils.clamp((projected.x * 0.5 + 0.5) * container.clientWidth, 36, container.clientWidth - 36)}px`;
      label.style.top = `${THREE.MathUtils.clamp((-projected.y * 0.5 + 0.5) * container.clientHeight, container.clientHeight * 0.16, container.clientHeight * 0.72)}px`;
    }
  }
  function finishFilm() {
    complete = true; stopAudio(); el('end-screen').hidden = false;
    el('cinema-hud').hidden = true; el('captions').hidden = true;
    for (const id of ['equation', 'angle-readout', 'component-readout']) el(id).hidden = true;
  }
  function playFilm() {
    if (started && !complete) return;
    if (timeline) timeline.kill();
    started = true; complete = false; currentScene = -1; playhead.time = 0;
    el('start-screen').hidden = true; el('end-screen').hidden = true;
    el('cinema-hud').hidden = false; el('captions').hidden = false;
    startAudio(); updateFilm(0);
    timeline = gsap.timeline({ data: 'spatial-film', onComplete: finishFilm });
    timeline.to(playhead, { time: FILM_DURATION, duration: FILM_DURATION, ease: 'none' });
  }
  el('start-btn').addEventListener('click', playFilm);
  el('replay-btn').addEventListener('click', playFilm);
  document.addEventListener('visibilitychange', () => {
    if (!timeline || complete) return;
    timeline.paused(document.hidden);
    if (audioMaster) audioMaster.gain.setTargetAtTime(document.hidden ? 0 : 0.22, audioCtx.currentTime, 0.2);
  });
  renderer.domElement.addEventListener('webglcontextlost', event => {
    event.preventDefault(); running = false; if (timeline) timeline.kill(); stopAudio();
    window.simulationUI.failed(new Error('Graphics context lost. Reload to try again.'));
  });
  function resize() {
    const w = container.clientWidth, h = container.clientHeight;
    renderer.setSize(w, h); composer.setSize(w, h); camera.aspect = w / h;
    camera.setViewOffset(w, h, 0, h * 0.065, w, h); camera.updateProjectionMatrix();
    if (started) updateFilm(playhead.time);
  }
  window.addEventListener('resize', resize); resize(); updateFilm(0);
  const clock = new THREE.Clock();
  function animate() {
    if (!running) return;
    requestAnimationFrame(animate);
    const delta = Math.min(clock.getDelta(), 0.1);
    if (started) updateFilm(playhead.time);
    try { composer.render(delta); }
    catch (error) { running = false; if (timeline) timeline.kill(); stopAudio(); window.simulationUI.failed(error); }
  }
  animate(); window.simulationUI.ready();
}
