import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Floating geometric shapes with glassmorphism effect
 * Creates depth and visual interest in the 3D scene
 */
export function FloatingGeometry({ scrollProgress = 0 }) {
  const groupRef = useRef();
  
  // Generate random positions for geometric shapes
  const shapes = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10 - 5,
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
      scale: Math.random() * 0.5 + 0.3,
      type: ['icosahedron', 'octahedron', 'dodecahedron', 'torus'][Math.floor(Math.random() * 4)],
      speed: Math.random() * 0.5 + 0.2,
    }));
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Subtle rotation based on time and scroll
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.05 + scrollProgress * 0.5;
  });

  return (
    <group ref={groupRef}>
      {shapes.map((shape) => (
        <Float
          key={shape.id}
          speed={shape.speed}
          rotationIntensity={0.5}
          floatIntensity={0.5}
          position={shape.position}
        >
          <GlassShape type={shape.type} scale={shape.scale} rotation={shape.rotation} />
        </Float>
      ))}
    </group>
  );
}

function GlassShape({ type, scale, rotation }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.002;
    meshRef.current.rotation.z += 0.001;
  });

  const geometry = useMemo(() => {
    switch (type) {
      case 'icosahedron':
        return <icosahedronGeometry args={[1, 0]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1, 0]} />;
      case 'dodecahedron':
        return <dodecahedronGeometry args={[1, 0]} />;
      case 'torus':
        return <torusGeometry args={[1, 0.3, 16, 32]} />;
      default:
        return <icosahedronGeometry args={[1, 0]} />;
    }
  }, [type]);

  return (
    <mesh ref={meshRef} scale={scale} rotation={rotation}>
      {geometry}
      <meshPhysicalMaterial
        color="#ff6b00"
        metalness={0.1}
        roughness={0.1}
        transmission={0.9}
        thickness={0.5}
        transparent
        opacity={0.3}
        envMapIntensity={1}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </mesh>
  );
}

export default FloatingGeometry;
