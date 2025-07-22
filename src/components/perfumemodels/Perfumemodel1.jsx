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
      setIsMobile(window.innerWidth <= 768); // mobile width
    };

    handleResize(); // initial check
    window.addEventListener('resize', handleResize); // listen for changes

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full h-[300px] md:h-[570px]">
      <Canvas camera={{ position: [0, 1, 12], fov: 30 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <PerfumeModel />
          <Environment preset="city" />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={!isMobile} // ✅ Disable rotate on mobile
            autoRotate={!isMobile ? true : false} // ✅ Only autoRotate on desktop
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default PerfumeCanvas;
