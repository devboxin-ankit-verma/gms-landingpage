"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import * as THREE from "three";

/** Orbit node radius — keep inside camera frustum so spheres are not clipped */
const RADIUS = 1.42;
const NODE_COUNT = 6;

type MouseRef = { current: { x: number; y: number } };

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 36;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 2.2;
      arr[i * 3] = Math.cos(angle) * dist;
      arr[i * 3 + 1] = Math.sin(angle) * dist;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 1.5;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * 0.015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#8B5CF6"
        transparent
        opacity={0.28}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function OrbitRings() {
  return (
    <>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[RADIUS, 0.007, 16, 96]} />
        <meshBasicMaterial color="#8B5CF6" transparent opacity={0.14} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[RADIUS * 0.7, 0.004, 12, 64]} />
        <meshBasicMaterial color="#EDE9FE" transparent opacity={0.4} />
      </mesh>
    </>
  );
}

function ConnectLines() {
  const segments = useMemo(() => {
    return Array.from({ length: NODE_COUNT }, (_, i) => {
      const angle = (i / NODE_COUNT) * Math.PI * 2 - Math.PI / 2;
      return [
        [0, 0, 0],
        [Math.cos(angle) * RADIUS, Math.sin(angle) * RADIUS, 0],
      ] as [number, number, number][];
    });
  }, []);

  return (
    <>
      {segments.map((points, i) => (
        <Line
          key={i}
          points={points}
          color="#8B5CF6"
          transparent
          opacity={0.1}
          lineWidth={1}
        />
      ))}
    </>
  );
}

function OrbitGroup({ mouse }: { mouse: MouseRef }) {
  const group = useRef<THREE.Group>(null);
  const parallax = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.z += delta * 0.1;
    if (parallax.current) {
      parallax.current.rotation.y = THREE.MathUtils.lerp(
        parallax.current.rotation.y,
        mouse.current.x * 0.05,
        0.06
      );
      parallax.current.rotation.x = THREE.MathUtils.lerp(
        parallax.current.rotation.x,
        mouse.current.y * 0.04,
        0.06
      );
    }
  });

  return (
    <group ref={parallax}>
      <group ref={group}>
        <ConnectLines />
      </group>
    </group>
  );
}

function CoreGlow() {
  return (
    <Float speed={1} rotationIntensity={0} floatIntensity={0.1}>
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color="#EDE9FE"
          emissive="#8B5CF6"
          emissiveIntensity={0.1}
          transparent
          opacity={0.75}
        />
      </mesh>
    </Float>
  );
}

function Scene({ mouse }: { mouse: MouseRef }) {
  return (
    <group scale={0.68}>
      <ambientLight intensity={0.92} />
      <pointLight position={[2, 2, 3]} intensity={0.45} color="#EDE9FE" />
      <pointLight position={[-2, -1, 2]} intensity={0.28} color="#8B5CF6" />
      <ParticleField />
      <OrbitRings />
      <OrbitGroup mouse={mouse} />
      <CoreGlow />
    </group>
  );
}

export function HeroScene({
  mouseRef,
}: {
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 30 }}
      dpr={[1, 1.25]}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      }}
      style={{ background: "transparent" }}
    >
      <Scene mouse={mouseRef} />
    </Canvas>
  );
}
