import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

const PerfumeModel = () => {
  const { scene } = useGLTF("/models/halo-perfume.glb"); // place file in /public/models
  return <primitive object={scene} scale={2.2} rotation={[0.1, Math.PI / 5, 0]} />;
};

const PerfumeBg = () => (
  <div className="absolute inset-0 -z-10">
    <Canvas camera={{ position: [0, 0, 8] }} dpr={[1, 1.5]} gl={{ alpha: true }}>
      <Suspense fallback={null}>
        <Environment preset="studio" />
        <PerfumeModel />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Suspense>
    </Canvas>
  </div>
);

export default PerfumeBg;
