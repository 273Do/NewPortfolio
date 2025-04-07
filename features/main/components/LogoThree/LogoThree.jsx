"use client";
import { Suspense, useMemo, useReducer, useRef } from "react";

import {
  Environment,
  Lightformer,
  MeshTransmissionMaterial,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
} from "@react-three/rapier";
import { easing } from "maath";
import { useTheme } from "next-themes";
import * as THREE from "three";

// Preload the model to avoid loading issues
useGLTF.preload("/273do_logo.glb");

const accents = ["#4d4d4d", "#20ffa0", "#ff4060", "#ffcc00"];
const shuffle = (_accent = 0) => [
  // { color: "#7e7e7e", roughness: 0.1 },
  // { color: "#7e7e7e", roughness: 0.75 },
  // { color: "#7e7e7e", roughness: 0.25 },
  { color: "#444", roughness: 0.1 },
  { color: "#444", roughness: 0.75 },
  { color: "#444", roughness: 0.25 },
  { color: "white", roughness: 0.1 },
  { color: "white", roughness: 0.75 },
  { color: "white", roughness: 0.25 },
];

// Main scene component
function Scene() {
  const [accent, _click] = useReducer((state) => ++state % accents.length, 0);
  const connectors = useMemo(() => shuffle(accent), [accent]);
  const { theme } = useTheme();
  const glass_obj = 2;

  return (
    <>
      {/* Background */}
      <color
        attach="background"
        args={[theme === "dark" ? "#0a0a0b" : "#ffffff"]}
      />

      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />

      {/* Physics setup */}
      <Physics gravity={[0, 0, 0]} debug={false}>
        <Pointer />

        {connectors.map((props, i) => (
          <Connector key={i} {...props} />
        ))}

        {[...Array(glass_obj)].map((_, i) => (
          <Connector key={`glass-${i}`} position={[10, 10, 5]}>
            <Model>
              <MeshTransmissionMaterial
                clearcoat={2}
                thickness={0.1}
                anisotropicBlur={0.1}
                chromaticAberration={0.1}
                samples={8}
                resolution={512}
              />
            </Model>
          </Connector>
        ))}
      </Physics>

      {/* Effects */}
      <EffectComposer disableNormalPass multisampling={8}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
      </EffectComposer>

      {/* Environment */}
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer
            form="circle"
            intensity={4}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={8}
          />
        </group>
      </Environment>
    </>
  );
}

// Main export component
export default function LogoThree(props) {
  return (
    <div className="fixed h-full w-full">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: true,
          stencil: false,
          depth: true,
        }}
        camera={{ position: [0, 14, 0], fov: 17.5, near: 1, far: 20 }}
        style={{ width: "100%", height: "100%" }}
        className="pointer-events-auto"
        {...props}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Other components remain the same
function Connector({
  position,
  children,
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  accent,
  ...props
}) {
  const api = useRef();
  const pos = useMemo(() => position || [r(10), r(10), r(10)], [position]);

  useFrame((_state, delta) => {
    if (!api.current) return;

    delta = Math.min(0.1, delta);
    const centerOffset = new THREE.Vector3(0, 0, 0);

    api.current.applyImpulse(
      vec
        .copy(api.current.translation())
        .sub(centerOffset)
        .negate()
        .multiplyScalar(0.2),
    );
  });

  const v = 2;
  return (
    <RigidBody
      linearDamping={4}
      angularDamping={1}
      friction={0.1}
      position={pos}
      rotation={pos}
      ref={api}
      colliders={false}
    >
      <CuboidCollider
        args={[0.8 * v, 0.1, 0.3 * v]}
        position={[0.7 * v, 0.1, -0.4 * v]}
      />
      {children ? children : <Model {...props} />}
      {accent && (
        <pointLight intensity={4} distance={2.5} color={props.color} />
      )}
    </RigidBody>
  );
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef();
  useFrame(({ mouse, viewport }) => {
    if (!ref.current) return;

    ref.current.setNextKinematicTranslation(
      vec.set(
        (mouse.x * viewport.width) / 2,
        (mouse.y * viewport.height) / 2,
        0,
      ),
    );
  });

  return (
    <RigidBody
      position={[0, 0, 0]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[0.75]} />
    </RigidBody>
  );
}

function Model({ children, color = "white", roughness = 0, ...props }) {
  const ref = useRef();

  // Try/catch for model loading
  let modelData = { nodes: null, materials: null };
  try {
    modelData = useGLTF("/273do_logo.glb");
  } catch (error) {
    console.error("Failed to load model:", error);
    // Return fallback mesh if model fails to load
    return (
      <mesh castShadow receiveShadow scale={1}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} roughness={roughness} />
        {children}
      </mesh>
    );
  }

  const { nodes, materials } = modelData;

  // Check if model loaded correctly
  if (!nodes || !nodes.mesh || !nodes.mesh.geometry) {
    console.warn("Model structure not as expected");
    return (
      <mesh castShadow receiveShadow scale={1}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} roughness={roughness} />
        {children}
      </mesh>
    );
  }

  useFrame((_state, delta) => {
    if (ref.current?.material) {
      easing.dampC(ref.current.material.color, color, 0.2, delta);
    }
  });

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      scale={20}
      geometry={nodes.mesh.geometry}
    >
      <meshStandardMaterial metalness={0.2} roughness={roughness} />
      {children}
    </mesh>
  );
}
