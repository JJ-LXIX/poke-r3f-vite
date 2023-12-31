/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/models/charmander2.gltf -o components/Charmander2.jsx -r public 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Charmander2(props) {
  const { nodes, materials } = useGLTF("/models/charmanderFinal.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          geometry={nodes.Charmander_body_body.geometry}
          material={materials.lambert1}
        />
        <mesh
          geometry={nodes.Charmander_body_fire.geometry}
          material={materials.lambert1}
        />
        <mesh
          geometry={nodes.Charmander_body_foot_L.geometry}
          material={materials.lambert1}
        />
        <mesh
          geometry={nodes.Charmander_body_foot_R.geometry}
          material={materials.lambert1}
        />
        <mesh
          geometry={nodes.Charmander_body_hand_L.geometry}
          material={materials.lambert1}
        />
        <mesh
          geometry={nodes.Charmander_body_hand_R.geometry}
          material={materials.lambert1}
        />
        <mesh
          geometry={nodes.Charmander_head_face.geometry}
          material={materials.lambert1}
        />
        <mesh
          geometry={nodes.Charmander_head_teeth_lower.geometry}
          material={materials.lambert1}
        />
        <mesh
          geometry={nodes.Charmander_head_teeth_upper.geometry}
          material={materials.lambert1}
        />
        <mesh
          geometry={nodes.Charmander_head_tongue.geometry}
          material={materials.lambert1}
        />
        <mesh
          geometry={nodes.Charmander_head_eyes_L_ball.geometry}
          material={materials.lambert1}
        />
        <mesh
          geometry={nodes.Charmander_head_eyes_R_ball.geometry}
          material={materials.lambert1}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/charmanderFinal.glb");
