import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';

function PerfumeModel() {
  const { scene } = useGLTF('/models/perfume1.glb');
  return (
    <primitive
      object={scene}
      scale={[0.5, 0.5, 0.5]}
      position={[0, -1.2, 0]}
    />
  );
}

function PerfumeCanvas() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full max-w-[180px] md:max-w-[330px] mx-auto h-[300px] md:h-[500px]">
      <Canvas camera={{ position: [0, 1, 12], fov: 30 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <PerfumeModel />
          <Environment preset="city" />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={!isMobile ? true : false} // ❌ User drag disabled on mobile
            autoRotate={true}                       // ✅ Always rotate automatically
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default PerfumeCanvas;
