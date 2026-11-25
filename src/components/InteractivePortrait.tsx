import React, { useRef, useState, useCallback, useEffect } from 'react';
import { SITE_COORDINATES } from '../data/siteData';

type FaceDirection = 'neutral' | 'left' | 'right' | 'up' | 'down';

const FACE_SOURCES: Record<FaceDirection, string> = {
  neutral: SITE_COORDINATES.interactiveFaces.neutral,
  left: SITE_COORDINATES.interactiveFaces.left,
  right: SITE_COORDINATES.interactiveFaces.right,
  up: SITE_COORDINATES.interactiveFaces.up,
  down: SITE_COORDINATES.interactiveFaces.down
};

export const InteractivePortrait: React.FC = () => {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const shellRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number>(0);
  const [activeFace, setActiveFace] = useState<FaceDirection>('neutral');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', listener);
    return () => {
      mq.removeEventListener('change', listener);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const updateGaze = useCallback(
    (clientX: number, clientY: number) => {
      const stage = stageRef.current;
      const shell = shellRef.current;
      if (!stage) return;

      const rect = stage.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, ((clientX - rect.left) / rect.width - 0.5) * 2));
      const y = Math.max(-1, Math.min(1, ((clientY - rect.top) / rect.height - 0.5) * 2));

      let nextFace: FaceDirection = 'neutral';
      if (Math.abs(x) > Math.abs(y) * 0.82 && Math.abs(x) > 0.17) {
        nextFace = x < 0 ? 'left' : 'right';
      } else if (Math.abs(y) > 0.22) {
        nextFace = y < 0 ? 'up' : 'down';
      }

      setActiveFace((prev) => (prev === nextFace ? prev : nextFace));

      if (!reducedMotion && shell) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
          const lift = Math.abs(x) + Math.abs(y) > 0.2 ? -3 : 0;
          shell.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 5}deg) translateY(${lift}px)`;
        });
      }
    },
    [reducedMotion]
  );

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'touch') return;
    updateGaze(e.clientX, e.clientY);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'touch') {
      updateGaze(e.clientX, e.clientY);
    }
  };

  const handlePointerLeave = () => {
    setActiveFace('neutral');
    if (shellRef.current) {
      shellRef.current.style.transform = 'rotateY(0deg) rotateX(0deg) translateY(0px)';
    }
  };

  return (
    <div
      ref={stageRef}
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerLeave={handlePointerLeave}
      aria-label="Interactive portrait of Eric Richson Darko"
      className="relative flex min-h-[420px] sm:min-h-[500px] lg:min-h-[560px] w-full items-center justify-center select-none [perspective:1100px] isolate cursor-pointer"
    >
      {/* Subtle warm radial backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute w-[min(78vw,430px)] aspect-square rounded-full blur-2xl"
        style={{
          background:
            'radial-gradient(circle, rgba(205,171,112,0.22), rgba(180,30,52,0.1) 48%, transparent 72%)'
        }}
      />

      {/* Orbital architectural ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute w-[min(72vw,410px)] aspect-square rounded-full border border-gold/25"
        style={{
          transform: 'rotateX(68deg) rotateZ(-18deg)',
          boxShadow: '0 0 55px rgba(192,157,100,0.08), inset 0 0 35px rgba(192,157,100,0.05)'
        }}
      >
        <div className="absolute inset-4 rounded-full border border-linen/10" />
      </div>

      {/* 3D Tilting Portrait Shell */}
      <div
        ref={shellRef}
        className="relative flex h-[390px] sm:h-[470px] lg:h-[520px] w-[min(82vw,430px)] items-center justify-center transition-transform duration-150 ease-out [transform-style:preserve-3d] will-change-transform"
      >
        {/* Ground shadow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-3 h-[12%] w-[68%] rounded-full bg-black/65 blur-2xl"
          style={{ transform: 'translateZ(-50px)' }}
        />

        {(Object.keys(FACE_SOURCES) as FaceDirection[]).map((dir) => {
          const isActive = activeFace === dir;
          return (
            <img
              key={dir}
              src={FACE_SOURCES[dir]}
              alt={
                dir === 'neutral'
                  ? 'Eric Richson Darko smiling, looking forward'
                  : ''
              }
              aria-hidden={dir !== 'neutral'}
              draggable={false}
              referrerPolicy="no-referrer"
              className={`pointer-events-none absolute max-h-full max-w-full h-auto w-auto object-contain transition-[opacity,transform] duration-200 ease-out drop-shadow-[0_24px_28px_rgba(0,0,0,0.48)] ${
                isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.985]'
              }`}
              style={{
                transform: isActive ? 'translateZ(35px) scale(1)' : 'translateZ(20px) scale(0.985)'
              }}
            />
          );
        })}
      </div>

      {/* Subtle interaction caption */}
      <p className="pointer-events-none absolute bottom-2 right-2 text-[0.65rem] uppercase tracking-[0.2em] text-linen/45">
        Move cursor or tap portrait
      </p>
    </div>
  );
};
