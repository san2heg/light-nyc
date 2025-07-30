'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";

export default function World() {
  return (
    <div id="canvas-container">
      <Canvas>
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshPhongMaterial />
        </mesh>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} color="red" />
        <OrbitControls />
      </Canvas>
    </div>
  ) 
}