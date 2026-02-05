import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Animated grid floor with perspective
 * Creates the futuristic "tron-like" ground effect
 */
export function GridFloor({ color = '#ff6b00', opacity = 0.3 }) {
  const gridRef = useRef();
  const materialRef = useRef();

  useFrame((state) => {
    if (!materialRef.current) return;
    
    // Animate the grid scrolling forward
    materialRef.current.uniforms.time.value = state.clock.elapsedTime * 0.5;
  });

  // Custom shader for animated grid
  const gridShader = {
    uniforms: {
      time: { value: 0 },
      color: { value: new THREE.Color(color) },
      opacity: { value: opacity },
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vPosition;
      
      void main() {
        vUv = uv;
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform vec3 color;
      uniform float opacity;
      
      varying vec2 vUv;
      varying vec3 vPosition;
      
      void main() {
        // Create grid lines
        vec2 grid = abs(fract(vUv * 20.0 - vec2(0.0, time)) - 0.5);
        float line = min(grid.x, grid.y);
        float gridPattern = 1.0 - smoothstep(0.0, 0.05, line);
        
        // Add glow effect
        float glow = gridPattern * 0.5 + smoothstep(0.1, 0.0, line) * 0.5;
        
        // Fade with distance
        float fade = smoothstep(1.0, 0.0, vUv.y);
        
        vec3 finalColor = color * glow;
        float alpha = glow * opacity * fade;
        
        gl_FragColor = vec4(finalColor, alpha);
      }
    `,
  };

  return (
    <mesh
      ref={gridRef}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -5, 0]}
    >
      <planeGeometry args={[100, 50, 1, 1]} />
      <shaderMaterial
        ref={materialRef}
        {...gridShader}
        transparent
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

export default GridFloor;
