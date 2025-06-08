// src/components/ThreeJsBackground/ThreeJsBackground.js
"use client";
import React, { useRef, useMemo, useState, useEffect, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Helper function for random number generation
const random = (min, max) => Math.random() * (max - min) + min;

// --- Particle System Component ---
// This component MUST be rendered as a child of <Canvas>
function ParticleSystem({
    particleCount = 300,      // Number of particles
    particleColor = '#FFFFFF',  // Color of particles
    particleBaseSize = 0.2,     // Base size of particles
    spreadFactor = 15,        // How far particles spread from origin
    mouseParallaxStrength = 0.2 // How much particles react to mouse (0 to 1+)
}) {
    const pointsRef = useRef(null);
    const { viewport, mouse } = useThree(); // R3F hook, valid here

    // Memoize initial positions so they are calculated only once
    const initialPositions = useMemo(() => {
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            // Spread particles within a cubic volume
            const x = random(-spreadFactor, spreadFactor);
            const y = random(-spreadFactor, spreadFactor);
            const z = random(-spreadFactor, spreadFactor);
            positions.set([x, y, z], i * 3);
        }
        return positions;
    }, [particleCount, spreadFactor]);

    // Animation loop for rotation and mouse parallax
    useFrame((state, delta) => {
        if (pointsRef.current) {
            // Gentle base rotation
            pointsRef.current.rotation.x += delta / 50;
            pointsRef.current.rotation.y += delta / 60;

            // Mouse-move parallax for the entire group
            const targetX = (mouse.x * viewport.width / 2) * mouseParallaxStrength * 0.1; // Apply strength and dampening
            const targetY = (mouse.y * viewport.height / 2) * mouseParallaxStrength * 0.1;

            pointsRef.current.position.x = THREE.MathUtils.lerp(
                pointsRef.current.position.x,
                targetX,
                // 0.05 // Smoothness of interpolation
                0.1 // Faster interpolation (snappier motion)
            );
            pointsRef.current.position.y = THREE.MathUtils.lerp(
                pointsRef.current.position.y,
                targetY,
                0.05
            );
        }
    });

    return (
        <Points ref={pointsRef} positions={initialPositions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent={true}
                color={particleColor}
                size={particleBaseSize}
                sizeAttenuation={true} // Particles get smaller further away
                depthWrite={false}
                opacity={0.8}         // Adjust for desired particle visibility
            />
        </Points>
    );
}

// --- Main Background Component ---
const ThreeJsBackground = ({
    style, // For parent-passed inline styles to the container div
    // Props to customize the particle system from outside
    particleCount = 300,
    particleColor = '#E0F0FF', // Default: light blue, good on dark backgrounds
    // particleBaseSize = 0.25,
    particleBaseSize = 0.1,
    spreadFactor = 12,
    // mouseParallaxStrength = 0.25,
    mouseParallaxStrength = 1.0
}) => {
    const containerRef = useRef(null); // Ref for the div that will contain the Canvas
    const [canvasDimensions, setCanvasDimensions] = useState({ width: 0, height: 0 });

    const updateDimensions = useCallback(() => {
        if (containerRef.current) {
            setCanvasDimensions({
                width: containerRef.current.clientWidth,
                height: containerRef.current.clientHeight,
            });
        }
    }, []); // No dependencies, this function itself is stable

    useEffect(() => {
        const currentContainer = containerRef.current;
        if (currentContainer) {
            updateDimensions(); // Set initial dimensions

            const observer = new ResizeObserver(updateDimensions);
            observer.observe(currentContainer);

            return () => {
                observer.unobserve(currentContainer);
                observer.disconnect();
            };
        }
    }, [updateDimensions]); // Rerun if updateDimensions changes (it won't)

    return (
        // This div is styled by ThreeJsBackground.scss to fill its parent (e.g., HeroSection)
        <div ref={containerRef} className="threejs-background-container" style={style}>
            {/* Only render Canvas when we have valid, non-zero dimensions */}
            {canvasDimensions.width > 0 && canvasDimensions.height > 0 && (
                <Canvas
                    // Explicitly pass the measured size to the Canvas
                    size={{
                        width: canvasDimensions.width,
                        height: canvasDimensions.height,
                        top: 0,
                        left: 0,
                    }}
                    // Style for the div R3F creates *around* the canvas
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    camera={{
                        position: [0, 0, 15], // Adjust Z to zoom in/out on the particle cloud
                        fov: 60,             // Field of view
                    }}
                    dpr={[1, 1.5]} // Device Pixel Ratio
                // frameloop="demand" // for performance, renders only when props change
                // onCreated={({ gl, size }) => console.log(`Canvas created: ${size.width}x${size.height}`)}
                >
                    <ambientLight intensity={0.7} />
                    <pointLight position={[15, 15, 15]} intensity={1} color="#FFFFFF" />
                    <pointLight position={[-15, -15, 10]} intensity={0.5} color={particleColor} /> {/* Themed light */}

                    <ParticleSystem
                        particleCount={particleCount}
                        particleColor={particleColor}
                        particleBaseSize={particleBaseSize}
                        spreadFactor={spreadFactor}
                        mouseParallaxStrength={mouseParallaxStrength}
                    />
                </Canvas>
            )}
        </div>
    );
};

export default ThreeJsBackground;