'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { 
  Play, 
  Pause, 
  RotateCw, 
  Volume2, 
  VolumeX, 
  Layers, 
  Zap, 
  Flame, 
  Award, 
  ArrowRight, 
  ShieldCheck, 
  HeartPulse, 
  Eye, 
  ChevronRight,
  Maximize2,
  Instagram,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { SaberFitnessLogo } from './SaberFitnessLogo';

export function Hero3DVideo() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [viewMode, setViewMode] = useState<'hybrid' | 'video' | '3d'>('hybrid');
  const [isRotating, setIsRotating] = useState(true);
  const [wireframeMode, setWireframeMode] = useState(false);
  const [plateTheme, setPlateTheme] = useState<'gold' | 'onyx' | 'crimson'>('crimson');
  const [videoPlaying, setVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeTelemetry, setActiveTelemetry] = useState({
    bpm: 144,
    power: '420 W',
    load: '36 KG',
    muscleFocus: 'Pectoraux & Triceps'
  });

  // Three.js Scene Refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const dumbbellGroupRef = useRef<THREE.Group | null>(null);
  const materialsRef = useRef<{ [key: string]: THREE.Material }>({});
  const isRotatingRef = useRef(isRotating);

  useEffect(() => {
    isRotatingRef.current = isRotating;
  }, [isRotating]);

  useEffect(() => {
    // Dynamic heartbeat simulation
    const interval = setInterval(() => {
      setActiveTelemetry(prev => ({
        ...prev,
        bpm: Math.floor(138 + Math.random() * 12)
      }));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Three.js 3D Dumbbell & Stage Initialization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    const width = parent?.clientWidth || 600;
    const height = parent?.clientHeight || 450;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.8, 6.5);
    camera.lookAt(0, 0, 0);

    // 3. Renderer with alpha for hybrid overlay
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    rendererRef.current = renderer;

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xff5500, 3.5);
    keyLight.position.set(5, 6, 4);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0xffaa00, 3, 10);
    rimLight.position.set(-4, -2, -3);
    scene.add(rimLight);

    const blueFill = new THREE.PointLight(0x00a8ff, 1.5, 12);
    blueFill.position.set(0, -4, 3);
    scene.add(blueFill);

    // 5. Build High-Detail 3D Dumbbell Model
    const dumbbellGroup = new THREE.Group();
    dumbbellGroupRef.current = dumbbellGroup;

    // Handle (knurled grip cylinder)
    const handleGeo = new THREE.CylinderGeometry(0.12, 0.12, 2.4, 32);
    const handleMat = new THREE.MeshStandardMaterial({
      color: 0x999999,
      metalness: 0.9,
      roughness: 0.35,
      wireframe: false
    });
    materialsRef.current.handle = handleMat;
    const handleMesh = new THREE.Mesh(handleGeo, handleMat);
    handleMesh.rotation.z = Math.PI / 2;
    dumbbellGroup.add(handleMesh);

    // Knurling texture rings
    for (let r = -0.7; r <= 0.7; r += 0.2) {
      const ringGeo = new THREE.TorusGeometry(0.13, 0.015, 12, 32);
      const ringMat = new THREE.MeshStandardMaterial({
        color: 0x222222,
        metalness: 0.8,
        roughness: 0.2
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.x = r;
      ring.rotation.y = Math.PI / 2;
      dumbbellGroup.add(ring);
    }

    // Weight Plate colors
    const plateColors = {
      crimson: 0xff3b00,
      gold: 0xd4af37,
      onyx: 0x1a1c23
    };

    const plateMat = new THREE.MeshStandardMaterial({
      color: 0xff3b00,
      metalness: 0.75,
      roughness: 0.25,
      wireframe: false
    });
    materialsRef.current.plate = plateMat;

    const rimMat = new THREE.MeshStandardMaterial({
      color: 0x111317,
      metalness: 0.9,
      roughness: 0.1
    });

    // Outer & Inner Weight Plates on both sides
    const plateSizes = [
      { radius: 0.95, width: 0.22, offset: 1.35 },
      { radius: 0.82, width: 0.18, offset: 1.62 },
      { radius: 0.68, width: 0.15, offset: 1.83 }
    ];

    [-1, 1].forEach((side) => {
      // Barbell sleeve end collar
      const collarGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.2, 24);
      const collarMesh = new THREE.Mesh(collarGeo, rimMat);
      collarMesh.rotation.z = Math.PI / 2;
      collarMesh.position.x = side * 1.15;
      dumbbellGroup.add(collarMesh);

      plateSizes.forEach(({ radius, width: pWidth, offset }) => {
        const plateGeo = new THREE.CylinderGeometry(radius, radius, pWidth, 36);
        const plate = new THREE.Mesh(plateGeo, plateMat);
        plate.rotation.z = Math.PI / 2;
        plate.position.x = side * offset;
        dumbbellGroup.add(plate);

        // Plate outer rubber bumper ring
        const bumperGeo = new THREE.TorusGeometry(radius + 0.02, 0.04, 16, 40);
        const bumper = new THREE.Mesh(bumperGeo, rimMat);
        bumper.position.x = side * offset;
        bumper.rotation.y = Math.PI / 2;
        dumbbellGroup.add(bumper);
      });

      // End locking nut
      const nutGeo = new THREE.CylinderGeometry(0.16, 0.16, 0.12, 16);
      const nut = new THREE.Mesh(nutGeo, handleMat);
      nut.rotation.z = Math.PI / 2;
      nut.position.x = side * 1.98;
      dumbbellGroup.add(nut);
    });

    // Subtle floating glowing embers / energy particles
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 8;
      positions[i + 1] = (Math.random() - 0.5) * 6;
      positions[i + 2] = (Math.random() - 0.5) * 6;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xff5500,
      size: 0.06,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Add group to scene
    dumbbellGroup.rotation.x = 0.35;
    dumbbellGroup.rotation.y = 0.7;
    scene.add(dumbbellGroup);

    // Mouse interactive tilt/drag
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !dumbbellGroupRef.current) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      dumbbellGroupRef.current.rotation.y += deltaX * 0.01;
      dumbbellGroupRef.current.rotation.x += deltaY * 0.01;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch support for mobile 3D interaction
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || !dumbbellGroupRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;

      dumbbellGroupRef.current.rotation.y += deltaX * 0.012;
      dumbbellGroupRef.current.rotation.x += deltaY * 0.012;

      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    canvas.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Handle container resize
    const handleResize = () => {
      if (!canvas || !renderer || !camera) return;
      const newWidth = canvas.parentElement?.clientWidth || 600;
      const newHeight = canvas.parentElement?.clientHeight || 450;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (dumbbellGroupRef.current && isRotatingRef.current && !isDragging) {
        dumbbellGroupRef.current.rotation.y += 0.009;
        dumbbellGroupRef.current.position.y = Math.sin(elapsedTime * 1.5) * 0.12;
      }

      // Slowly rotate particle field
      particles.rotation.y = elapsedTime * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      renderer.dispose();
    };
  }, []);

  // Update Three.js materials when user toggles wireframe or color
  useEffect(() => {
    if (materialsRef.current.plate) {
      const mat = materialsRef.current.plate as THREE.MeshStandardMaterial;
      mat.wireframe = wireframeMode;
      const colors = {
        crimson: 0xff3b00,
        gold: 0xd4af37,
        onyx: 0x1e222d
      };
      mat.color.setHex(colors[plateTheme]);
      mat.needsUpdate = true;
    }
  }, [wireframeMode, plateTheme]);

  const toggleVideoPlayback = () => {
    if (!videoRef.current) return;
    if (videoPlaying) {
      videoRef.current.pause();
      setVideoPlaying(false);
    } else {
      videoRef.current.play();
      setVideoPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen pt-24 pb-16 flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#0b0c10] via-[#0f1117] to-[#0b0c10]"
    >
      {/* Background ambient glowing light cones */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-[#ff5500]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute -top-24 right-10 w-[450px] h-[450px] bg-[#ff2200]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Grid: Left Column Copy & CTAs, Right Column 3D Video Interactive Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: French Headline, Badges, Value Props & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Top Elite Badge & Instagram Account Highlight */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="p-2 rounded-xl bg-[#11131a] border border-red-500/30 shadow-lg shadow-red-950/40">
                <SaberFitnessLogo size="sm" showSubtitle={false} />
              </div>

              <a
                href="https://www.instagram.com/saber_fitt?stkn=MWVqN2xvbHhiM2xqbw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#833ab4]/30 via-[#fd1d1d]/30 to-[#fcb045]/30 border border-[#fd1d1d]/40 text-white text-xs font-bold hover:scale-105 transition-all shadow-md group"
              >
                <span className="w-5 h-5 rounded-full p-0.5 bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center">
                  <img 
                    src="/images/saber_profile_avatar.jpg" 
                    alt="Coach Saber" 
                    className="w-full h-full rounded-full object-cover" 
                  />
                </span>
                <span className="text-zinc-200">Coach Saber Officiel</span>
                <span className="px-1.5 py-0.5 rounded-md bg-red-600/20 text-red-400 text-[10px] font-extrabold flex items-center gap-1">
                  <Instagram className="w-3 h-3 text-red-500" />
                  @saber_fitt
                </span>
              </a>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1e222d] border border-red-500/30 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-200 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-red-500" />
                  Forged by discipline
                </span>
              </div>
            </div>

            {/* Main Headline in French */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.08]">
              DÉPASSEZ VOS LIMITES AVEC <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-[#ff3b00] to-amber-400">
                SF • SABER FITNESS GYM
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-xl">
              Bienvenue sur la plateforme officielle de <strong className="text-white font-semibold">Coach Saber</strong>. 
              Programmes de musculation sur mesure, perte de gras ciblée, biomécanique du mouvement et nutrition scientifique 
              pour métamorphoser votre corps durablement.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#offre-coaching"
                id="hero-cta-offer"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-[#ff4400] to-[#ff2200] hover:from-red-500 hover:to-[#ff5500] text-white font-bold text-sm tracking-wide shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-0.5 transition-all"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Bilan Offert 100% • Découvrir l’Offre</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#calculateur"
                id="hero-cta-calculator"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#181a24] hover:bg-[#232736] border border-[#303445] hover:border-[#ff5500]/40 text-zinc-200 font-semibold text-sm transition-all"
              >
                <span>Calculateur IMC</span>
              </a>
            </div>

            {/* Trust Signals & Coach Credibility */}
            <div className="pt-4 border-t border-[#232736] grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">500+</p>
                <p className="text-xs text-zinc-400 font-medium">Transformations</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#ff5500] tracking-tight">7j/7</p>
                <p className="text-xs text-zinc-400 font-medium">Suivi WhatsApp</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">100%</p>
                <p className="text-xs text-zinc-400 font-medium">Sur Mesure</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Video Viewport Centerpiece */}
          <div className="lg:col-span-6">
            <div 
              id="experience-3d"
              className="relative rounded-2xl bg-[#12141c] border border-[#262a3b] p-3 sm:p-4 shadow-2xl shadow-black/80 overflow-hidden group"
            >
              {/* Header Bar of the 3D Video Deck */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-[#212534]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-zinc-200 uppercase tracking-wider">
                    Interface 3D Vidéo Interactive
                  </span>
                </div>

                {/* View Mode Switcher */}
                <div className="flex items-center p-1 bg-[#191c28] rounded-lg border border-[#2b3044] text-[11px] font-semibold">
                  <button
                    onClick={() => setViewMode('hybrid')}
                    id="btn-mode-hybrid"
                    className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${
                      viewMode === 'hybrid'
                        ? 'bg-[#ff5500] text-white shadow'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Layers className="w-3 h-3" />
                    <span>Hybride 3D</span>
                  </button>
                  <button
                    onClick={() => setViewMode('video')}
                    id="btn-mode-video"
                    className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${
                      viewMode === 'video'
                        ? 'bg-[#ff5500] text-white shadow'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Play className="w-3 h-3" />
                    <span>Vidéo HD</span>
                  </button>
                  <button
                    onClick={() => setViewMode('3d')}
                    id="btn-mode-3d"
                    className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${
                      viewMode === '3d'
                        ? 'bg-[#ff5500] text-white shadow'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Eye className="w-3 h-3" />
                    <span>Studio 3D</span>
                  </button>
                </div>
              </div>

              {/* Viewport Canvas & Video Stage */}
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-xl overflow-hidden bg-gradient-to-b from-[#151824] to-[#0d0f15] border border-[#242838] flex items-center justify-center">
                
                {/* 1. Cinematic Background Video Loop (shown in 'hybrid' and 'video' modes) */}
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  id="hero-cinematic-video"
                  poster="/images/saber_gym_training.jpg"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    viewMode === '3d' 
                      ? 'opacity-0 pointer-events-none' 
                      : viewMode === 'hybrid' 
                        ? 'opacity-40 mix-blend-screen scale-105' 
                        : 'opacity-100'
                  }`}
                >
                  {/* High quality fitness workout video streams */}
                  <source
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
                    type="video/mp4"
                  />
                  Votre navigateur ne supporte pas la balise vidéo.
                </video>

                {/* Ambient dark gradient overlay on video */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-[#0b0c10]/70 pointer-events-none" />

                {/* 2. Interactive Three.js 3D WebGL Canvas */}
                <canvas
                  ref={canvasRef}
                  id="dumbbell-3d-canvas"
                  className={`relative z-10 w-full h-full cursor-grab active:cursor-grabbing transition-opacity duration-500 ${
                    viewMode === 'video' ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                />

                {/* 3. Holographic Telemetry HUD Overlays (when in hybrid or 3d mode) */}
                {viewMode !== 'video' && (
                  <>
                    {/* Top Left HUD: Cardio Telemetry */}
                    <div className="absolute top-4 left-4 z-20 pointer-events-none flex flex-col gap-2">
                      <div className="px-3 py-2 rounded-lg bg-[#0e1017]/85 backdrop-blur-md border border-[#ff5500]/30 shadow-lg text-left">
                        <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                          <HeartPulse className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
                          <span>Fréquence Cardiaque</span>
                        </div>
                        <div className="flex items-baseline gap-1.5 mt-0.5">
                          <span className="text-lg font-black text-white">{activeTelemetry.bpm}</span>
                          <span className="text-[10px] text-zinc-400 font-bold uppercase">BPM</span>
                          <span className="text-[10px] text-emerald-400 font-semibold ml-2">Zone Optimale</span>
                        </div>
                      </div>

                      <div className="px-3 py-1.5 rounded-lg bg-[#0e1017]/80 backdrop-blur-md border border-[#2b3044] text-left">
                        <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">Cible Musculaire</span>
                        <span className="text-xs font-bold text-[#ff7733]">{activeTelemetry.muscleFocus}</span>
                      </div>
                    </div>

                    {/* Top Right HUD: Load & Force */}
                    <div className="absolute top-4 right-4 z-20 pointer-events-none text-right">
                      <div className="px-3 py-2 rounded-lg bg-[#0e1017]/85 backdrop-blur-md border border-[#ff5500]/30 shadow-lg">
                        <div className="flex items-center justify-end gap-1.5 text-xs font-semibold text-zinc-300">
                          <Zap className="w-3.5 h-3.5 text-amber-400" />
                          <span>Puissance Estimée</span>
                        </div>
                        <p className="text-lg font-black text-white mt-0.5">{activeTelemetry.power}</p>
                      </div>
                    </div>

                    {/* Bottom Center Interaction Guide */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-[10px] text-zinc-300 font-medium whitespace-nowrap">
                      Glissez la souris / le doigt pour faire pivoter le modèle 3D
                    </div>
                  </>
                )}

                {/* Video Controls Bar (Bottom right) */}
                <div className="absolute bottom-3 right-3 z-30 flex items-center gap-2">
                  <button
                    onClick={toggleVideoPlayback}
                    id="btn-toggle-video-playback"
                    className="p-2 rounded-lg bg-[#0e1017]/85 hover:bg-[#ff5500] border border-[#2c3144] hover:border-[#ff5500] text-white transition-all shadow"
                    title={videoPlaying ? 'Mettre en pause' : 'Lire la vidéo'}
                  >
                    {videoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    id="btn-toggle-video-mute"
                    className="p-2 rounded-lg bg-[#0e1017]/85 hover:bg-[#ff5500] border border-[#2c3144] hover:border-[#ff5500] text-white transition-all shadow"
                    title={isMuted ? 'Activer le son' : 'Couper le son'}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5 text-zinc-300" /> : <Volume2 className="w-3.5 h-3.5 text-[#ff5500]" />}
                  </button>
                </div>
              </div>

              {/* Bottom 3D Customizer Toolbar */}
              <div className="mt-3 pt-3 border-t border-[#212534] flex flex-wrap items-center justify-between gap-3 text-xs">
                {/* Plate Color Finish Switcher */}
                <div className="flex items-center gap-2">
                  <span className="text-zinc-400 font-medium text-[11px]">Finition 3D :</span>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setPlateTheme('crimson')}
                      id="theme-btn-crimson"
                      className={`px-2 py-1 rounded border text-[11px] font-semibold transition-all ${
                        plateTheme === 'crimson'
                          ? 'border-[#ff5500] text-[#ff5500] bg-[#ff5500]/15'
                          : 'border-[#2c3144] text-zinc-400 hover:text-white'
                      }`}
                    >
                      Rouge Fitt
                    </button>
                    <button
                      onClick={() => setPlateTheme('gold')}
                      id="theme-btn-gold"
                      className={`px-2 py-1 rounded border text-[11px] font-semibold transition-all ${
                        plateTheme === 'gold'
                          ? 'border-amber-400 text-amber-300 bg-amber-400/15'
                          : 'border-[#2c3144] text-zinc-400 hover:text-white'
                      }`}
                    >
                      Or Titane
                    </button>
                    <button
                      onClick={() => setPlateTheme('onyx')}
                      id="theme-btn-onyx"
                      className={`px-2 py-1 rounded border text-[11px] font-semibold transition-all ${
                        plateTheme === 'onyx'
                          ? 'border-zinc-300 text-white bg-zinc-700/30'
                          : 'border-[#2c3144] text-zinc-400 hover:text-white'
                      }`}
                    >
                      Noir Onyx
                    </button>
                  </div>
                </div>

                {/* Interactive Toggles */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsRotating(!isRotating)}
                    id="btn-toggle-rotation"
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded border text-[11px] font-medium transition-all ${
                      isRotating 
                        ? 'border-[#ff5500]/40 text-zinc-200 bg-[#ff5500]/10' 
                        : 'border-[#2c3144] text-zinc-400'
                    }`}
                  >
                    <RotateCw className={`w-3 h-3 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
                    <span>Rotation Auto</span>
                  </button>

                  <button
                    onClick={() => setWireframeMode(!wireframeMode)}
                    id="btn-toggle-wireframe"
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded border text-[11px] font-medium transition-all ${
                      wireframeMode
                        ? 'border-[#ff5500] text-[#ff5500] bg-[#ff5500]/15'
                        : 'border-[#2c3144] text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <Layers className="w-3 h-3" />
                    <span>Filaire 3D</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
