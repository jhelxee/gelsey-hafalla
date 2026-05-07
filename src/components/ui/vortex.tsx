import { useEffect, useRef, useCallback } from "react";
import { cn } from "../../lib/utils";

interface VortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
}

function rand(n: number): number {
  return n * Math.random();
}

function randRange(n: number): number {
  return n - rand(2 * n);
}

function fadeInOut(t: number, m: number): number {
  let hm = 0.5 * m;
  return Math.abs(((t + hm) % m) - hm) / hm;
}

function lerp(n1: number, n2: number, speed: number): number {
  return (1 - speed) * n1 + speed * n2;
}

const PARTICLE_COUNT = 700;
const PARTICLE_PROP_COUNT = 9;
const TICK_SPEED = 0.3;
const NOISE_STEPS = 3;
const X_OFF = 0.0008;
const Y_OFF = 0.0008;
const BACKGROUND_COLOR = "hsla(260,40%,5%,1)";

export function Vortex({
  children,
  className,
  containerClassName,
  particleCount = PARTICLE_COUNT,
  rangeY = 100,
  baseHue = 220,
  baseSpeed = 0.0,
  rangeSpeed = 1.5,
  baseRadius = 1,
  rangeRadius = 2,
  backgroundColor = BACKGROUND_COLOR,
}: VortexProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particleProps = useRef<Float32Array>(
    new Float32Array(particleCount * PARTICLE_PROP_COUNT)
  );
  const center = useRef<[number, number]>([0, 0]);
  const tick = useRef(0);
  const animationId = useRef<number>(0);

  const PARTICLE_PROPS_LENGTH_ACTUAL = particleCount * PARTICLE_PROP_COUNT;

  const initParticle = useCallback(
    (i: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const x = rand(canvas.width);
      const y = center.current[1] + randRange(rangeY);
      const vx = 0;
      const vy = 0;
      const life = 0;
      const ttl = 0.5 + rand(50);
      const speed = baseSpeed + rand(rangeSpeed);
      const radius = baseRadius + rand(rangeRadius);
      const hue = baseHue + rand(100);
      particleProps.current.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
    },
    [baseHue, baseRadius, baseSpeed, rangeRadius, rangeSpeed, rangeY]
  );

  const initParticles = useCallback(() => {
    tick.current = 0;
    particleProps.current = new Float32Array(PARTICLE_PROPS_LENGTH_ACTUAL);
    for (let i = 0; i < PARTICLE_PROPS_LENGTH_ACTUAL; i += PARTICLE_PROP_COUNT) {
      initParticle(i);
    }
  }, [PARTICLE_PROPS_LENGTH_ACTUAL, initParticle]);

  const drawParticle = useCallback(
    (
      x: number,
      y: number,
      x2: number,
      y2: number,
      life: number,
      ttl: number,
      radius: number,
      hue: number,
      ctx: CanvasRenderingContext2D
    ) => {
      ctx.save();
      ctx.lineCap = "round";
      ctx.lineWidth = radius;
      ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    },
    []
  );

  const updateParticle = useCallback(
    (i: number, ctx: CanvasRenderingContext2D) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const i2 = 1 + i,
        i3 = 2 + i,
        i4 = 3 + i,
        i5 = 4 + i,
        i6 = 5 + i,
        i7 = 6 + i,
        i8 = 7 + i,
        i9 = 8 + i;

      const n =
        Math.sin(
          particleProps.current[i] * X_OFF +
            tick.current * TICK_SPEED * 0.0002
        ) *
          NOISE_STEPS +
        Math.sin(
          particleProps.current[i2] * Y_OFF +
            tick.current * TICK_SPEED * 0.0002
        ) *
          NOISE_STEPS;

      const x = particleProps.current[i];
      const y = particleProps.current[i2];
      const vx = lerp(
        particleProps.current[i3],
        Math.cos(n) * particleProps.current[i7],
        0.15
      );
      const vy = lerp(
        particleProps.current[i4],
        Math.sin(n) * particleProps.current[i7],
        0.15
      );
      const life = particleProps.current[i5];
      const ttl = particleProps.current[i6];
      const radius = particleProps.current[i8];
      const hue = particleProps.current[i9];

      drawParticle(x, y, x + vx * 2, y + vy * 2, life, ttl, radius, hue, ctx);

      particleProps.current[i] = x + vx;
      particleProps.current[i2] = y + vy;
      particleProps.current[i3] = vx;
      particleProps.current[i4] = vy;
      particleProps.current[i5] =
        life + 1;

      if (
        life > ttl ||
        x > canvas.width ||
        x < 0 ||
        y > canvas.height ||
        y < 0
      ) {
        initParticle(i);
      }
    },
    [drawParticle, initParticle]
  );

  const draw = useCallback(
    (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
      tick.current++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (
        let i = 0;
        i < PARTICLE_PROPS_LENGTH_ACTUAL;
        i += PARTICLE_PROP_COUNT
      ) {
        updateParticle(i, ctx);
      }

      animationId.current = requestAnimationFrame(() => draw(canvas, ctx));
    },
    [PARTICLE_PROPS_LENGTH_ACTUAL, backgroundColor, updateParticle]
  );

  const setup = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    center.current = [0.5 * canvas.width, 0.5 * canvas.height];

    initParticles();
    draw(canvas, ctx);
  }, [draw, initParticles]);

  useEffect(() => {
    setup();
    const handleResize = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      center.current = [0.5 * canvas.width, 0.5 * canvas.height];
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationId.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [setup]);

  return (
    <div className={cn("relative h-full w-full", containerClassName)} ref={containerRef}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className={cn("absolute inset-0 z-10", className)}>{children}</div>
    </div>
  );
}
