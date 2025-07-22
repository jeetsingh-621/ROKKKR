import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';

function PerfumeModel() {
  const { scene } = useGLTF('/models/perfume1.glb');
  return (
    <primitive
      object={scene}
      scale={[0.5, 0.5, 0.5]}      // proper scaling
      position={[0, -1.2, 0]}      // thoda niche shift
    />
  );
}

 function PerfumeCanvas() {
  return (
    <div className="w-full h-[300px] md:h-[570px]">
      <Canvas camera={{ position: [0, 1, 12], fov: 30 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <PerfumeModel />
          <Environment preset="city" />
          <OrbitControls enableZoom={false} autoRotate  enablePan={false}   />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default PerfumeCanvas