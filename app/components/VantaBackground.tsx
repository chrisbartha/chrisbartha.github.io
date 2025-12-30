"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    VANTA?: {
      WAVES: (opts: Record<string, unknown>) => VantaEffect;
    };
  }
}

interface VantaEffect {
  destroy: () => void;
}

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffectRef = useRef<VantaEffect | null>(null);

  useEffect(() => {
    if (vantaEffectRef.current) return;
    if (!vantaRef.current) return;

    const init = () => {
      if (!window.VANTA?.WAVES || !vantaRef.current) return;

      vantaEffectRef.current = window.VANTA.WAVES({
        el: vantaRef.current,
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
    };

    // small delay to ensure scripts are ready
    const timer = setTimeout(init, 50);

    return () => {
      clearTimeout(timer);
      vantaEffectRef.current?.destroy();
      vantaEffectRef.current = null;
    };
  }, []);

  return <div ref={vantaRef} className="vanta-background" />;
}
