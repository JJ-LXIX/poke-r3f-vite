import { CameraControls, Environment, useCursor } from "@react-three/drei";
import Squirtle2 from "/src/components/Squirtle2";
import Bulbasaur2 from "/src/components/Bulbasaur2";
import Charmander2 from "/src/components/Charmander2";
import PokeStage from "./PokeStage";
import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useThree } from "@react-three/fiber";

function PokeThreeJs({ active, setActive }) {
  const [hovered, setHovered] = useState();
  const controlsRef = useRef();
  const scene = useThree((state) => state.scene);
  useCursor(hovered);

  useEffect(() => {
    if (active) {
      const targetPosition = new THREE.Vector3();
      scene.getObjectByName(active)?.getWorldPosition(targetPosition);
      controlsRef.current.setLookAt(
        0,
        0,
        4,
        targetPosition.x,
        targetPosition.y,
        targetPosition.z,
        true
      );
    } else {
      controlsRef.current.setLookAt(0, 0, 10, 0, 0, 0, true);
    }
  }, [active]);
  return (
    <>
    </>
  );
}

export default PokeThreeJs;
