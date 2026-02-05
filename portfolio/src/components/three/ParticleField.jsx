import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Animated particle field with glowing orange particles
 * Creates a futuristic, ethereal atmosphere
 */
export function ParticleField({ count = 360, color = '#ff6b00' }) {
  const mesh = useRef();
  const light = useRef();

  // Generate random positions and velocities for particles
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Spread particles in a large sphere
      positions[i3] = (Math.random() - 0.5) * 50;
      positions[i3 + 1] = (Math.random() - 0.5) * 50;
      positions[i3 + 2] = (Math.random() - 0.5) * 50;
      
      // Random velocities for floating motion
      velocities[i3] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;
      
      // Varied sizes for depth
      sizes[i] = Math.random() * 0.5 + 0.1;
    }
    
    return { positions, velocities, sizes };
  }, [count]);

  // Animate particles
  useFrame((state) => {
    if (!mesh.current) return;
    
    const positions = mesh.current.geometry.attributes.position.array;
    const time = state.clock.elapsedTime;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Add subtle wave motion
      positions[i3] += particles.velocities[i3] + Math.sin(time + i * 0.1) * 0.001;
      positions[i3 + 1] += particles.velocities[i3 + 1] + Math.cos(time + i * 0.1) * 0.001;
      positions[i3 + 2] += particles.velocities[i3 + 2];
      
      // Wrap around boundaries
      if (Math.abs(positions[i3]) > 25) positions[i3] *= -0.9;
      if (Math.abs(positions[i3 + 1]) > 25) positions[i3 + 1] *= -0.9;
      if (Math.abs(positions[i3 + 2]) > 25) positions[i3 + 2] *= -0.9;
    }
    
    mesh.current.geometry.attributes.position.needsUpdate = true;
    
    // Rotate entire field slowly
    mesh.current.rotation.y = time * 0.02;
    mesh.current.rotation.x = Math.sin(time * 0.01) * 0.1;
  });

  return (
    <group>
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={particles.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={count}
            array={particles.sizes}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.12}
          color={color}
          transparent
          opacity={0.45}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
      
      {/* Soft ambient glow light */}
      <pointLight
        ref={light}
        position={[0, 0, 0]}
        color={color}
        intensity={0.25}
        distance={40}
      />
    </group>
  );
}

export default ParticleField;
