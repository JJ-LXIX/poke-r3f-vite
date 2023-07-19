/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/models/bulbasaur2.gltf -o components/Bulbasaur2.jsx -r public 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Bulbasaur2(props) {
  const { nodes, materials } = useGLTF("/src/assets/models/bulbasaur2.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          geometry={nodes.Bulbasaur_body_body.geometry}
          material={materials.lambert1}
        />
        <mesh
          geometry={nodes.Bulbasaur_body_foot_L.geometry}
          material={materials.lambert1}
        />
        <mesh
          geometry={nodes.Bulbasaur_body_foot_R.geometry}
          material={materials.lambert1}
        />
        <mesh
          geometry={nodes.Bulbasaur_body_hand_L.geometry}
          material={materials.lambert1}
        />
        <mesh
          geometry={nodes.Bulbasaur_body_hand_R.geometry}
          material={materials.lambert1}
        />
        <mesh
          geometry={nodes.Bulbasaur_body_seed.geometry}
          material={materials.lambert1}
        />
        <mesh
          geometry={nodes.Bulbasaur_head_face.geometry}
          material={materials.lambert1}
        />
        <mesh
          geometry={nodes.Bulbasaur_head_teeth.geometry}
          material={materials.lambert1}
        />
        <mesh
          geometry={nodes.Bulbasaur_head_eyes_L_ball.geometry}
          material={materials.lambert1}
        />
        <mesh
          geometry={nodes.Bulbasaur_head_eyes_R_ball.geometry}
          material={materials.lambert1}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/src/assets/models/bulbasaur2.gltf");