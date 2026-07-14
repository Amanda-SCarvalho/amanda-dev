"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import * as random from "maath/random";
import type { Points as PointsType } from "three";

function Stars(props: any) {
  const ref = useRef<PointsType>(null);

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(3000), { radius: 1.4 }),
  );

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.02;
      ref.current.rotation.y -= delta * 0.015;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.0018}
          sizeAttenuation
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

export default function StarsBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  );
}
