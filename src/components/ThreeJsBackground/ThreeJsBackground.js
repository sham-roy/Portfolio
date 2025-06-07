// src/components/ThreeJsBackground/ThreeJsBackground.js
"use client"; // Keep if using Next.js App Router with client components

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Helper function for random number generation
const random = (min, max) => Math.random() * (max - min) + min;

function FloatingShapes({ count = 200, color = '#000' }) {
    const pointsRef = useRef();
    const { viewport, mouse } = useThree(); // Hook to access viewport and normalized mouse coordinates

    // Memoize initial particle positions so they are calculated only once per count change
    const initialPositions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const x = random(-30, 30);
            const y = random(-20, 20);
            const z = random(-50, 50);
            pos.set([x, y, z], i * 3);
        }
        return pos;
    }, [count]);

    // Animation loop that runs on every frame
    useFrame((state, delta) => {
        if (pointsRef.current) {
            // Gentle base rotation for the entire particle system
            pointsRef.current.rotation.x += delta / 40; // Adjust divisor for rotation speed
            pointsRef.current.rotation.y += delta / 45;

            // --- Mouse-Move Parallax Effect ---
            // This makes the particle system react to mouse movement.
            const parallaxStrength = 0.3; // VISIBILITY & INTERACTION: How much the particles react to mouse. (0.1 to 0.5 is usually good)
            const movementSubtlety = 8;   // VISIBILITY & INTERACTION: Larger number = more subtle/damped mouse follow. (5 to 10)
            const lerpFactor = 0.05;      // Smoothness of the parallax movement (0.01 to 0.1)

            // Target X position based on mouse, scaled by viewport and factors
            const targetX = (mouse.x * viewport.width / 2 * parallaxStrength) / movementSubtlety;
            // Target Y position based on mouse
            const targetY = (mouse.y * viewport.height / 2 * parallaxStrength) / movementSubtlety;

            // Smoothly interpolate (lerp) current position towards target position
            pointsRef.current.position.x = THREE.MathUtils.lerp(
                pointsRef.current.position.x,
                targetX,
                lerpFactor
            );
            pointsRef.current.position.y = THREE.MathUtils.lerp(
                pointsRef.current.position.y,
                targetY,
                lerpFactor
            );
        }
    });

    return (
        <Points ref={pointsRef} positions={initialPositions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent={true}     // VISIBILITY: Set to true if opacity is less than 1.
                color={color}          // VISIBILITY & COLOR: The main color of the particles.
                size={0.6}             // VISIBILITY & SIZE: Adjust this value significantly (e.g., 0.1 to 0.6).
                sizeAttenuation={true} // Particles appear smaller further from the camera. Usually true.
                depthWrite={false}     // Often set to false for transparent/additive particles to prevent sorting issues.
                opacity={1.0}          // VISIBILITY: Particle opacity (0.0 to 1.0). Higher = more solid and visible.
            />
        </Points>
    );
}

const ThreeJsBackground = ({
    style,                      // For applying CSS styles from the parent (e.g., width, height)
    count = 550,                // Default number of particles for the whole background
    shapeColor = '#3b82f6'      // Default particle color (a very light blue, good on dark backgrounds)
}) => {
    return (
        <div className="threejs-background-container" style={style}>
            <Canvas
                // VISIBILITY & CAMERA SETUP:
                camera={{
                    position: [0, 0, 12], // Z-value: How far the camera is. Smaller Z = closer to particles = particles appear larger.
                    fov: 65,             // Field of View: Affects the perspective. (50-75 is common).
                }}
                dpr={[1, 1.5]} // Device Pixel Ratio: Optimizes for retina displays. [1, 2] is max, [1, 1.5] is a good compromise.
            >
                {/* VISIBILITY & LIGHTING: Affects how particles are perceived, especially if not using PointMaterial or if PointMaterial had more complex shading. */}
                <ambientLight intensity={1.0} /> {/* Provides overall, non-directional light. Increased for better base visibility. */}
                <pointLight position={[20, 20, 20]} intensity={1.5} color="#000" /> {/* A bright white key light. */}
                <pointLight position={[-20, -15, 15]} intensity={0.8} color="#000000" /> {/* A subtle colored fill/rim light. */}
                <FloatingShapes count={count} color={shapeColor} />
            </Canvas>
        </div>
    );
};

export default ThreeJsBackground;