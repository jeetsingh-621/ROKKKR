import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

// Custom spinning 3D ring component
function SpinningRing() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02;
    }
  });

  return (
    <mesh ref={meshRef} scale={[1.8, 1.8, 1.8]}>
      <torusGeometry args={[1, 0.2, 16, 100]} />
      <meshStandardMaterial color="#00ffc3" metalness={0.6} roughness={0.1} />
    </mesh>
  );
}

const LoaderCanvas = () => (
  <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
    <ambientLight intensity={0.7} />
    <directionalLight position={[3, 2, 1]} intensity={1} />
    <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    <SpinningRing />
  </Canvas>
);

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-32 h-32"
      >
        <LoaderCanvas />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-6 text-3xl font-semibold tracking-widest text-[#00ffc3]"
      >
        HALO
      </motion.h1>
    </div>
  );
};

export default Loader;
