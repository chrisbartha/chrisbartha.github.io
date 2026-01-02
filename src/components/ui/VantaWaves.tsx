'use client';

import { useRef, useState, useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    VANTA?: {
      WAVES: (opts: Record<string, unknown>) => VantaEffect;
    };
    THREE?: unknown;
  }
}

interface VantaEffect {
  destroy: () => void;
}

export function VantaWaves() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffectRef = useRef<VantaEffect | null>(null);
  const [threeLoaded, setThreeLoaded] = useState(false);
  const [vantaLoaded, setVantaLoaded] = useState(false);

  // Initialize Vanta when both scripts are loaded
  useEffect(() => {
    if (!threeLoaded || !vantaLoaded) return;
    if (vantaEffectRef.current) return;
    if (!vantaRef.current) return;
    if (!window.VANTA?.WAVES || !window.THREE) return;

    vantaEffectRef.current = window.VANTA.WAVES({
      el: vantaRef.current,
      THREE: window.THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 66825,
      shininess: 35,
      waveHeight: 15,
      waveSpeed: 0.3,
      zoom: 0.75,
    });

    return () => {
      vantaEffectRef.current?.destroy();
      vantaEffectRef.current = null;
    };
  }, [threeLoaded, vantaLoaded]);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="afterInteractive"
        onLoad={() => setThreeLoaded(true)}
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.waves.min.js"
        strategy="afterInteractive"
        onLoad={() => setVantaLoaded(true)}
      />
      <div ref={vantaRef} className="vanta-background" />
    </>
  );
}
