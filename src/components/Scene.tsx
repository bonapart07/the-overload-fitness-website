"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, ContactShadows } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from 'three';
import { useScroll } from "framer-motion";
import styles from './Scene.module.css';

function DumbbellMesh({ scrollYProgress }: { scrollYProgress: any }) {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      // Get scroll progress from 0 to 1
      const scroll = scrollYProgress.get();
      
      const time = state.clock.getElapsedTime();
      
      // Base rotation from scroll with slight continuous idle rotation
      group.current.rotation.y = scroll * Math.PI * 4 + time * 0.4;
      group.current.rotation.x = scroll * Math.PI * 0.5 + Math.sin(time * 0.8) * 0.2;
      group.current.rotation.z = Math.cos(time * 0.8) * 0.2;
      
      // Move object based on scroll pos
      // Start at center, move right, then move left
      let targetX = 0;
      let targetY = 0;
      let targetZ = 0;
      let targetScale = 1;

      if (scroll < 0.25) {
        // Hero: Right Side - moved closer to center to ensure visibility on mobile/desktop without interaction
        targetX = THREE.MathUtils.lerp(group.current.position.x, 1.8, 0.1);
        targetY = THREE.MathUtils.lerp(group.current.position.y, 0.5, 0.1);
      } else if (scroll < 0.5) {
        // Ethos: Shift deeper right but keep visible
        targetX = THREE.MathUtils.lerp(group.current.position.x, 2.2, 0.1);
        targetY = THREE.MathUtils.lerp(group.current.position.y, -1, 0.1);
      } else if (scroll < 0.75) {
        // Services/Gallery: Move center and deep background
        targetX = THREE.MathUtils.lerp(group.current.position.x, 0, 0.1);
        targetY = THREE.MathUtils.lerp(group.current.position.y, -2.5, 0.1);
        targetZ = THREE.MathUtils.lerp(group.current.position.z, -3, 0.1);
      } else {
        // End CTA: zoom in close
        targetX = THREE.MathUtils.lerp(group.current.position.x, 0, 0.1);
        targetY = THREE.MathUtils.lerp(group.current.position.y, 1.5, 0.1);
        targetZ = THREE.MathUtils.lerp(group.current.position.z, 2, 0.1);
      }

      group.current.position.x = targetX;
      group.current.position.y = targetY;
      group.current.position.z = targetZ;
    }
  });

  return (
    <group ref={group}>
      <Float speed={4} rotationIntensity={0.8} floatIntensity={1.5}>
        {/* Handle */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.2, 0.2, 3, 32]} />
          <meshStandardMaterial color="#888888" metalness={0.9} roughness={0.1} />
        </mesh>
        
        {/* Left Weights */}
        <mesh position={[-1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[1.2, 1.2, 0.5, 32]} />
          <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[-1.7, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.9, 0.9, 0.4, 32]} />
          <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[-2.1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.6, 0.6, 0.3, 32]} />
          <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Right Weights */}
        <mesh position={[1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[1.2, 1.2, 0.5, 32]} />
          <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[1.7, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.9, 0.9, 0.4, 32]} />
          <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[2.1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.6, 0.6, 0.3, 32]} />
          <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene() {
  const { scrollYProgress } = useScroll();

  return (
    <div className={`${styles.canvasContainer} ${styles.canvasInteractive}`}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ antialias: true }}>
        <ambientLight intensity={1.5} />
        <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={2} color="#39ff14" />
        <spotLight position={[-10, 10, -10]} angle={0.2} penumbra={1} intensity={1} color="#ffffff" />
        <DumbbellMesh scrollYProgress={scrollYProgress} />
        <Environment preset="studio" />
        {/* <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={2} far={4} /> */}
      </Canvas>
    </div>
  );
}
