import { gsap } from 'gsap';
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { FilmPass } from 'three/addons/postprocessing/FilmPass.js';

// Durations leave the complete explanation visible before advancing.
export const LESSON_STEPS = [
  { title: 'মাত্রা মানে কী?', duration: 11, shape: 'point',
    text: 'একটি অবস্থান ঠিক করে বলতে কয়টি স্বাধীন সংখ্যা লাগে? সেই সংখ্যাই ওই স্থানের মাত্রা। শুধু একটি বিন্দুতে চলার কোনো স্বাধীন দিক নেই।',
    formula: 'বিন্দু → ০টি স্বাধীন দিক → 0D',
    note: '“স্বাধীন” মানে: অন্য দিকগুলো মিলিয়ে যে দিকটি বানানো যায় না।' },
  { title: '১D — একটি সংখ্যা যথেষ্ট', duration: 12, shape: 'line',
    text: 'সোজা পথে কোথায় আছো? শুরুর জায়গা থেকে কত দূরে, শুধু সেটি বললেই হয়। লাল রেখায় P-এর অবস্থান জানাতে x = 3 যথেষ্ট।',
    formula: 'P = (3) · একটি স্থানাঙ্ক: x',
    note: 'একই রেখায় সামনে ও পেছনে চলা দুটি স্বাধীন মাত্রা নয়।' },
  { title: '২D — দৈর্ঘ্য ও প্রস্থ', duration: 14, shape: 'plane',
    text: 'কাগজের ওপর একটি বিন্দু খুঁজতে ডানে কত দূর এবং ওপরে কত দূর—দুটিই জানতে হয়। X ও Y মিলে পুরো সমতলটি তৈরি করে।',
    formula: 'P = (3, 2) · দুটি স্থানাঙ্ক: x, y',
    note: 'এখানে X ⟂ Y। কোণের ছোট বর্গটি ৯০° বোঝায়।' },
  { title: '৩D — এবার উচ্চতাও দরকার', duration: 15, shape: 'cube',
    text: 'ঘরের মধ্যে একটি অবস্থান বলতে দৈর্ঘ্য, প্রস্থ ও উচ্চতা লাগে। ঘনকের P বিন্দুটি খুঁজতে এবার তিনটি সংখ্যা প্রয়োজন।',
    formula: 'P = (3, 2, 2) · তিনটি স্থানাঙ্ক: x, y, z',
    note: 'চিত্রে X = দৈর্ঘ্য, Y = প্রস্থ, Z = উচ্চতা। অক্ষের নাম বদলালেও মাত্রা বদলায় না।' },
  { title: 'তিনটি অক্ষই পরস্পর লম্ব', duration: 12, shape: 'angles',
    text: 'X–Y, Y–Z এবং Z–X: প্রতিটি জোড়ার আসল কোণ ৯০°। তিনটি স্বাধীন দিক মিলে আমাদের এই 3D স্থান তৈরি করেছে।',
    formula: '∠(X, Y) = ∠(Y, Z) = ∠(Z, X) = 90°',
    note: 'স্ক্রিনে দৃশ্যটি একটি 2D প্রক্ষেপণ। তাই চোখে কোণ আলাদা লাগতে পারে; পাশের মানগুলো 3D কোণ।' },
  { title: 'চতুর্থ স্বাধীন দিক খুঁজি', duration: 16, shape: 'candidate',
    text: 'হলুদ রেখা W-কে ঘুরিয়ে দেখি। একটি কোণ ৯০°-এর কাছাকাছি হলেও অন্য কোণগুলো বদলায়। তিনটির সঙ্গেই একসঙ্গে লম্ব হচ্ছে কি?',
    formula: 'লক্ষ্য: ∠(W, X) = ∠(W, Y) = ∠(W, Z) = 90°',
    note: 'এটি উদাহরণ দেখানোর চেষ্টা। শুধু ঘোরানো বা অ্যানিমেশন দিয়ে অসম্ভবের প্রমাণ হয় না।' },
  { title: 'X ও Y-এর সঙ্গে লম্ব করলে…', duration: 13, shape: 'overlap',
    text: 'W-কে X ও Y দুটির সঙ্গেই লম্ব করলাম। এবার সেটি Z-এর দিকেই চলে এসেছে। হলুদ ও নীল একই দিকে—একটি নতুন স্বাধীন অক্ষ হলো না।',
    formula: 'W = (0, 0, 1) → X: 90° · Y: 90° · Z: 0°',
    note: 'উল্টো দিকে নিলেও সেটি একই Z অক্ষ: Z-এর সঙ্গে তখন ১৮০°, ৯০° নয়।' },
  { title: 'কেন সম্ভব নয়? ছোট্ট গণিত', duration: 20, shape: 'proof',
    text: '3D-তে নতুন দিকের ভেক্টর ধরি W = (a, b, c)। লম্ব দুটি ভেক্টরের ডট প্রোডাক্ট শূন্য। তাই তিনটি শর্ত একসঙ্গে দিলে:',
    formula: 'X-এর সঙ্গে লম্ব → a = 0\nY-এর সঙ্গে লম্ব → b = 0\nZ-এর সঙ্গে লম্ব → c = 0\nতাই W = (0, 0, 0)',
    note: 'শূন্য ভেক্টরের দৈর্ঘ্য ০; কোনো দিক নেই। ফলে সেটি চতুর্থ অক্ষ হতে পারে না। এই যুক্তি এই 3D স্থানের জন্য।' },
  { title: 'তাহলে ৪D গণিত কি অসম্ভব?', duration: 15, shape: 'four',
    text: 'না। চার মাত্রার গণিতে চারটি স্বাধীন স্থানাঙ্ক ব্যবহার করা যায়: x, y, z, w। সেখানে চতুর্থ অক্ষের জন্য আলাদা স্থানাঙ্ক রয়েছে।',
    formula: '4D: (x, y, z, w) · চতুর্থ একক অক্ষ: (0, 0, 0, 1)',
    note: 'এই 3D দৃশ্যে অতিরিক্ত স্বাধীন অক্ষ দেখাতে না পারা দিয়ে বাস্তব মহাবিশ্বে অতিরিক্ত মাত্রা আছে কি না, তা প্রমাণ হয় না।' },
  { title: 'সময়: “কোথায়”-এর সঙ্গে “কখন”', duration: 16, shape: 'time',
    text: 'একই জায়গায় দুটি ঘটনা হতে পারে, কিন্তু আলাদা সময়ে। ঘটনাটি চিহ্নিত করতে জায়গার তিনটি স্থানাঙ্কের সঙ্গে সময়ও লিখি।',
    formula: 'ঘটনা A: (3, 2, 2, t = 0 s)\nঘটনা B: (3, 2, 2, t = 5 s)',
    note: 'আপেক্ষিকতার spacetime-এ তিনটি স্থানিক মাত্রা ও একটি সময়ের মাত্রা থাকে। সময়কে নতুন স্থানিক রেখা হিসেবে আঁকছি না।' }
];

export function initializeSimulation() {
  const byId = id => document.getElementById(id);
  const container = byId('canvas-container');
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x030610);
  const camera = new THREE.PerspectiveCamera(44, 1, 0.1, 100);
  const target = new THREE.Vector3(2, 2, 2);
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, window.innerWidth < 600 ? 1 : 1.5));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  container.appendChild(renderer.domElement);
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  composer.addPass(new UnrealBloomPass(new THREE.Vector2(1, 1), 0.65, 0.35, 0.3));
  composer.addPass(new FilmPass(0.065, false));

  const dust = new THREE.Points(
    new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(
      Array.from({ length: 1800 }, () => (Math.random() - 0.5) * 70), 3)),
    new THREE.PointsMaterial({ size: 0.025, color: 0x66799e, transparent: true, opacity: 0.3 })
  );
  scene.add(dust);
  const origin = new THREE.Mesh(new THREE.SphereGeometry(0.085, 16, 16), new THREE.MeshBasicMaterial({ color: 0xffffff }));
  scene.add(origin);
  const point = new THREE.Mesh(new THREE.SphereGeometry(0.13, 20, 20), new THREE.MeshBasicMaterial({ color: 0xffffff }));
  scene.add(point);
  const up = new THREE.Vector3(0, 1, 0);
  const directions = [new THREE.Vector3(1, 0, 0), up.clone(), new THREE.Vector3(0, 0, 1)];
  const colors = [0xff5575, 0x52eaa0, 0x60a5ff];
  function laser(color, radius = 0.023) {
    const geometry = new THREE.CylinderGeometry(radius, radius, 1, 10);
    geometry.translate(0, 0.5, 0);
    const mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color }));
    mesh.scale.y = 6;
    scene.add(mesh);
    return mesh;
  }
  const axes = colors.map((color, index) => {
    const mesh = laser(color);
    mesh.quaternion.setFromUnitVectors(up, directions[index]);
    return mesh;
  });
  const candidate = laser(0xffc75b, 0.042);
  const candidateDirection = new THREE.Vector3(1, 1, 1).normalize();
  function polyline(points, color, opacity = 1) {
    const object = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points.map(p => new THREE.Vector3(...p))),
      new THREE.LineBasicMaterial({ color, transparent: true, opacity }));
    scene.add(object);
    return object;
  }
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(4, 4),
    new THREE.MeshBasicMaterial({ color: 0x44c9b2, transparent: true, opacity: 0.13, side: THREE.DoubleSide, depthWrite: false }));
  plane.position.set(2, 2, 0);
  scene.add(plane);
  const grid = new THREE.Group();
  for (let n = 0; n <= 4; n++) {
    for (const points of [[[n, 0, 0], [n, 4, 0]], [[0, n, 0], [4, n, 0]]]) {
      const line = polyline(points, 0x64ddbe, 0.4);
      scene.remove(line); grid.add(line);
    }
  }
  scene.add(grid);
  const cube = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(4, 4, 4)),
    new THREE.LineBasicMaterial({ color: 0x9cbcff, transparent: true, opacity: 0.7 }));
  cube.position.set(2, 2, 2);
  scene.add(cube);
  const marks = [
    polyline([[0.7, 0, 0], [0.7, 0.7, 0], [0, 0.7, 0]], 0xf7edc3),
    polyline([[0, 0.7, 0], [0, 0.7, 0.7], [0, 0, 0.7]], 0xf7edc3),
    polyline([[0.7, 0, 0], [0.7, 0, 0.7], [0, 0, 0.7]], 0xf7edc3)
  ];
  const guides = new THREE.LineSegments(new THREE.BufferGeometry(),
    new THREE.LineBasicMaterial({ color: 0xffe8a6, transparent: true, opacity: 0.8 }));
  scene.add(guides);
  function setGuides(position) {
    const { x, y, z } = position;
    guides.geometry.dispose();
    guides.geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0), new THREE.Vector3(x, 0, 0),
      new THREE.Vector3(x, 0, 0), new THREE.Vector3(x, y, 0),
      new THREE.Vector3(x, y, 0), new THREE.Vector3(x, y, z)
    ]);
  }
  const labelDefinitions = [
    ['label-x', new THREE.Vector3(6.3, 0, 0)],
    ['label-y', new THREE.Vector3(0, 6.3, 0)],
    ['label-z', new THREE.Vector3(0, 0, 6.3)],
    ['label-origin', new THREE.Vector3(-0.2, -0.2, 0)],
    ['label-point', point.position],
    ['label-w', new THREE.Vector3()]
  ];

  let audioCtx = null, drone = null;
  let started = false, running = true, paused = false, index = -1;
  let stepTimeline = null;
  const elapsed = { value: 0 };
  let activeShape = 'point';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function startAudio() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      audioCtx = new AudioContext();
      audioCtx.resume().catch(() => {});
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.frequency.value = 48;
      gain.gain.value = 0.045;
      osc.connect(gain); gain.connect(audioCtx.destination); osc.start();
      drone = { osc, gain };
    } catch (error) { console.warn('Audio unavailable; continuing visually.', error); }
  }
  function stopAudio() {
    if (!drone) return;
    drone.gain.gain.setTargetAtTime(0, audioCtx.currentTime, 0.2);
    drone.osc.stop(audioCtx.currentTime + 1);
    drone = null;
  }
  function setSound() {
    if (!drone) return;
    drone.gain.gain.setTargetAtTime(paused || byId('sound-btn').getAttribute('aria-pressed') === 'true' ? 0 : 0.045,
      audioCtx.currentTime, 0.1);
  }
  function cameraPosition(shape) {
    const narrow = container.clientWidth / container.clientHeight < 1.25;
    if (shape === 'line') return { x: 3, y: 0.8, z: narrow ? 15 : 11 };
    if (shape === 'plane') return { x: 2, y: 2, z: narrow ? 17 : 12 };
    return { x: narrow ? 13 : 11, y: narrow ? 10 : 8, z: narrow ? 16 : 13 };
  }
  function setStep(nextIndex) {
    if (stepTimeline) stepTimeline.kill();
    if (nextIndex >= LESSON_STEPS.length) { finish(); return; }
    index = Math.max(0, nextIndex);
    const step = LESSON_STEPS[index];
    activeShape = step.shape;
    document.body.classList.toggle('proof-step', activeShape === 'proof');
    elapsed.value = 0;
    paused = false;
    byId('pause-btn').textContent = 'বিরতি';
    byId('pause-btn').setAttribute('aria-pressed', 'false');
    setSound();
    byId('lesson-panel').hidden = false;
    byId('terminal-screen').hidden = true;
    byId('step-title').textContent = step.title;
    byId('subtitle-text').textContent = step.text;
    byId('formula').textContent = step.formula;
    byId('lesson-note').textContent = step.note;
    byId('step-count').textContent = `${index + 1} / ${LESSON_STEPS.length}`;
    byId('prev-btn').disabled = index === 0;
    byId('next-btn').textContent = index === LESSON_STEPS.length - 1 ? 'সারাংশ' : 'পরের ধাপ →';
    byId('pause-btn').disabled = false;
    byId('next-btn').disabled = false;
    byId('lesson-controls').hidden = false;
    byId('lesson-progress').setAttribute('aria-valuenow', String(index + 1));
    byId('lesson-panel').scrollTop = 0;
    const dimension = activeShape === 'point' ? 0 : activeShape === 'line' ? 1 : activeShape === 'plane' ? 2 : 3;
    axes.forEach((axis, n) => { axis.visible = n < dimension; axis.scale.y = 6; byId(`label-${'xyz'[n]}`).hidden = !axis.visible; });
    plane.visible = grid.visible = activeShape === 'plane';
    cube.visible = ['cube', 'angles', 'four', 'time'].includes(activeShape);
    candidate.visible = ['candidate', 'overlap'].includes(activeShape);
    marks.forEach((mark, n) => { mark.visible = dimension >= 2 && (n === 0 || activeShape === 'angles'); });
    point.visible = ['line', 'plane', 'cube', 'time'].includes(activeShape);
    point.position.set(3, dimension >= 2 ? 2 : 0, dimension >= 3 ? 2 : 0);
    setGuides(point.position);
    guides.visible = point.visible;
    byId('label-point').hidden = !point.visible;
    byId('label-point').textContent = activeShape === 'time' ? 'A · t = 0 s' : 'P';
    byId('label-w').hidden = !candidate.visible;
    byId('label-origin').hidden = activeShape === 'point';
    byId('angle-readout').hidden = !['angles', 'candidate', 'overlap'].includes(activeShape);
    byId('proof-explanation').hidden = activeShape !== 'proof';
    byId('coordinate-four').hidden = activeShape !== 'four';
    target.set(2, dimension < 2 ? 0 : 2, dimension < 3 ? 0 : 2);
    camera.up.set(0, dimension < 3 ? 1 : 0, dimension < 3 ? 0 : 1);
    if (activeShape === 'overlap') candidateDirection.set(0, 0, 1);
    if (activeShape === 'candidate') candidateDirection.set(1, 1, 1).normalize();
    candidate.quaternion.setFromUnitVectors(up, candidateDirection);
    if (activeShape === 'angles') byId('angle-values').textContent = 'X–Y: 90°   Y–Z: 90°   Z–X: 90°';
    byId('angle-caption').textContent = activeShape === 'angles' ? 'পরস্পর লম্ব তিনটি অক্ষ' : 'W-এর সঙ্গে আসল 3D কোণ';
    stepTimeline = gsap.timeline({ onComplete: () => setStep(index + 1) });
    stepTimeline.to(camera.position, { ...cameraPosition(activeShape), duration: reduceMotion ? 0 : 1.7, ease: 'sine.inOut' }, 0);
    if (dimension > 0 && index <= 3 && !reduceMotion) {
      const axis = axes[dimension - 1];
      axis.scale.y = 0.0001;
      stepTimeline.to(axis.scale, { y: 6, duration: 1.7, ease: 'power2.out' }, 0);
    }
    stepTimeline.to(elapsed, { value: step.duration, duration: step.duration, ease: 'none' }, 0);
  }
  function finish() {
    stopAudio();
    index = LESSON_STEPS.length;
    byId('lesson-panel').hidden = true;
    byId('terminal-screen').hidden = false;
    byId('angle-readout').hidden = true;
    byId('step-count').textContent = 'সম্পূর্ণ';
    byId('pause-btn').disabled = byId('next-btn').disabled = true;
    byId('prev-btn').disabled = false;
    byId('progress-fill').style.width = '100%';
    byId('lesson-progress').setAttribute('aria-valuenow', String(LESSON_STEPS.length));
  }
  byId('start-btn').addEventListener('click', () => {
    if (started) return;
    started = true;
    startAudio();
    byId('start-screen').hidden = true;
    byId('lesson-hud').hidden = false;
    byId('label-origin').hidden = false;
    document.body.classList.add('immersive');
    setStep(0);
  });
  byId('prev-btn').addEventListener('click', () => setStep(index - 1));
  byId('next-btn').addEventListener('click', () => setStep(index + 1));
  byId('pause-btn').addEventListener('click', () => {
    paused = !paused;
    stepTimeline.paused(paused);
    byId('pause-btn').textContent = paused ? 'চালিয়ে যাও' : 'বিরতি';
    byId('pause-btn').setAttribute('aria-pressed', String(paused));
    setSound();
  });
  byId('sound-btn').addEventListener('click', () => {
    const muted = byId('sound-btn').getAttribute('aria-pressed') !== 'true';
    byId('sound-btn').setAttribute('aria-pressed', String(muted));
    byId('sound-btn').textContent = muted ? 'সাউন্ড বন্ধ' : 'সাউন্ড চালু';
    setSound();
  });
  byId('replay-btn').addEventListener('click', () => { startAudio(); setStep(0); });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && stepTimeline && index < LESSON_STEPS.length && !paused) byId('pause-btn').click();
  });
  renderer.domElement.addEventListener('webglcontextlost', event => {
    event.preventDefault(); running = false;
    if (stepTimeline) stepTimeline.kill(); stopAudio();
    window.simulationUI.failed(new Error('Graphics context lost. Reload to try again.'));
  });
  function resize() {
    const width = container.clientWidth, height = container.clientHeight;
    renderer.setSize(width, height); composer.setSize(width, height);
    camera.aspect = width / height; camera.updateProjectionMatrix();
    if (stepTimeline && index < LESSON_STEPS.length) {
      const wasPaused = paused;
      const time = elapsed.value;
      setStep(Math.min(index, LESSON_STEPS.length - 1));
      stepTimeline.seek(time, false);
      if (wasPaused) byId('pause-btn').click();
    } else camera.position.set(11, 8, 13);
  }
  window.addEventListener('resize', resize);
  resize();
  axes.forEach(axis => { axis.visible = false; });
  for (const item of [plane, grid, cube, candidate, point, guides, ...marks]) item.visible = false;
  const projection = new THREE.Vector3();
  const clock = new THREE.Clock();
  function animate() {
    if (!running) return;
    requestAnimationFrame(animate);
    const delta = Math.min(clock.getDelta(), 0.1);
    if (!paused && !reduceMotion) dust.rotation.y += delta * 0.025;
    if (activeShape === 'candidate' && !reduceMotion) {
      const t = elapsed.value * 0.5;
      candidateDirection.set(Math.cos(t), 0.5 + Math.sin(t * 0.7), Math.sin(t)).normalize();
    }
    if (candidate.visible) {
      candidate.quaternion.setFromUnitVectors(up, candidateDirection);
      labelDefinitions[5][1].copy(candidateDirection).multiplyScalar(5.2);
      const angles = directions.map(direction => THREE.MathUtils.radToDeg(Math.acos(THREE.MathUtils.clamp(candidateDirection.dot(direction), -1, 1))));
      byId('angle-values').textContent = `X: ${angles[0].toFixed(1)}°   Y: ${angles[1].toFixed(1)}°   Z: ${angles[2].toFixed(1)}°`;
    }
    if (activeShape === 'time') byId('label-point').textContent = elapsed.value < 8 ? 'A · t = 0 s' : 'B · t = 5 s';
    if (index >= 0 && index < LESSON_STEPS.length) byId('progress-fill').style.width = `${(index + elapsed.value / LESSON_STEPS[index].duration) / LESSON_STEPS.length * 100}%`;
    camera.lookAt(target); camera.updateMatrixWorld();
    for (const [id, position] of labelDefinitions) {
      const label = byId(id);
      if (label.hidden) continue;
      projection.copy(position).project(camera);
      const x = (projection.x * 0.5 + 0.5) * container.clientWidth;
      const y = (-projection.y * 0.5 + 0.5) * container.clientHeight;
      label.style.left = `${THREE.MathUtils.clamp(x, 52, container.clientWidth - 52)}px`;
      label.style.top = `${THREE.MathUtils.clamp(y, 20, container.clientHeight - 20)}px`;
    }
    try { composer.render(delta); }
    catch (error) { running = false; if (stepTimeline) stepTimeline.kill(); stopAudio(); window.simulationUI.failed(error); }
  }
  animate();
  window.simulationUI.ready();
}
