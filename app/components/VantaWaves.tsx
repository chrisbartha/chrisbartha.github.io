"use client";

import { useEffect, useRef } from "react";

type VantaEffect = {
  destroy: () => void;
};

const THREE_SRC =
  "https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.min.js";
const VANTA_WAVES_SRC =
  "https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.waves.min.js";

const loadScript = (src: string) =>
  new Promise<void>((resolve, reject) => {
    const existing = document.querySelector(
      `script[src="${src}"]`,
    ) as HTMLScriptElement | null;

    if (existing) {
      if (existing.dataset.loaded === "true") {
        resolve();
        return;
      }

      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", (error) => reject(error), {
        once: true,
      });
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.dataset.loaded = "false";
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = (error) => reject(error);
    document.body.append(script);
  });

type VantaWavesProps = {
  className?: string;
};

export default function VantaWaves({ className }: VantaWavesProps) {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const vantaEffect = useRef<VantaEffect | null>(null);

  useEffect(() => {
    let isMounted = true;

    const initVanta = async () => {
      if (!vantaRef.current) return;

      try {
        await loadScript(THREE_SRC);
        await loadScript(VANTA_WAVES_SRC);

        if (!isMounted || !vantaRef.current) return;

        const waves =
          (window as typeof window & { VANTA?: { WAVES?: (opts: object) => VantaEffect } })
            .VANTA?.WAVES;

        if (!waves) return;

        vantaEffect.current = waves({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x20202,
            waveHeight: 16,
            waveSpeed: 0.4,
            zoom: 0.80,
        });
      } catch (error) {
        console.error("Failed to initialize Vanta", error);
      }
    };

    initVanta();

    return () => {
      isMounted = false;
      vantaEffect.current?.destroy();
      vantaEffect.current = null;
    };
  }, []);

  return <div ref={vantaRef} className={className} aria-hidden />;
}

