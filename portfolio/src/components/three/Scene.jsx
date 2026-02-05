import { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, Environment } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration, Vignette } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { ParticleField } from './ParticleField';
import { FloatingGeometry } from './FloatingGeometry';
import { GridFloor } from './GridFloor';

/**
 * Camera controller that responds to scroll and mouse
 */
function CameraController({ scrollProgress }) {
  const { camera } = useThree();
  const targetY = useRef(0);
  const targetX = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetX.current = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY.current = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    // Smooth camera movement based on mouse
    camera.position.x += (targetX.current * 2 - camera.position.x) * 0.02;
    camera.position.y += (-targetY.current * 1 + 2 - camera.position.y) * 0.02;
    
    // Adjust camera Z based on scroll
    camera.position.z = 15 - scrollProgress * 5;
    
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/**
 * Main 3D scene component
 */
function SceneContent({ scrollProgress }) {
  return (
    <>
      <CameraController scrollProgress={scrollProgress} />
      
      {/* Lighting (softened) */}
      <ambientLight intensity={0.12} />
      <directionalLight position={[10, 12, 6]} intensity={0.35} color="#ffffff" />
      <pointLight position={[-10, -8, -10]} intensity={0.18} color="#ff6b00" />
      <pointLight position={[10, 8, 10]} intensity={0.16} color="#f5b942" />
      
      {/* 3D Elements */}
      <ParticleField count={360} color="#ff6b00" />
      <FloatingGeometry scrollProgress={scrollProgress} />
      <GridFloor color="#ff6b00" opacity={0.18} />
      
      {/* Environment for reflections */}
      <Environment preset="night" />
    </>
  );
}

/**
 * Post-processing effects
 */
function Effects() {
  return (
    <EffectComposer>
      <Bloom
        intensity={0.5}
        luminanceThreshold={0.2}
        luminanceSmoothing={0.9}
        mipmapBlur
      />
      <ChromaticAberration
        blendFunction={BlendFunction.NORMAL}
        offset={[0.0005, 0.0005]}
      />
      <Vignette darkness={0.5} offset={0.3} />
    </EffectComposer>
  );
}

/**
 * Main Scene wrapper with Canvas
 */
export function Scene({ scrollProgress = 0 }) {
  return (
    <div 
      style={{ 
        position: 'fixed', 
        inset: 0, 
        zIndex: -1,
        background: 'linear-gradient(180deg, #030303 0%, #0a0a0a 50%, #111111 100%)',
      }}
      aria-hidden="true"
    >
      <Canvas
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]}
      >
        <PerspectiveCamera makeDefault position={[0, 2, 15]} fov={60} />
        <Suspense fallback={null}>
          <SceneContent scrollProgress={scrollProgress} />
          <Effects />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Scene;
