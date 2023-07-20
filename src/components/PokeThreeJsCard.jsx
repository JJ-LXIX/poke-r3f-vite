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
      <ambientLight intensity={0.1} />
      <Environment preset="sunset" />
      <CameraControls
        ref={controlsRef}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 5}
      />

      <PokeStage
        texture={"/world/forest.jpg"}
        name="Bulbasaur"
        color={"#8acabf"}
        active={active}
        setActive={setActive}
        hovered={hovered}
        setHovered={setHovered}
      >
        <Bulbasaur2
          scale={3}
          position-y={-0.7}
          hovered={hovered === "bulbasaur"}
        />
      </PokeStage>
      <PokeStage
        name="Charmander"
        color="#e9424e"
        texture={"/world/desert.jpg"}
        position-x={-3}
        rotation-y={Math.PI / 5}
        active={active}
        setActive={setActive}
        hovered={hovered}
        setHovered={setHovered}
      >
        <Charmander2
          scale={3}
          position-y={-0.7}
          hovered={hovered === "charmander"}
        />
      </PokeStage>
      <PokeStage
        name="Squirtle"
        color="#79afd4"
        texture={"/world/beach.jpg"}
        position-x={3}
        rotation-y={-Math.PI / 5}
        active={active}
        setActive={setActive}
        hovered={hovered}
        setHovered={setHovered}
      >
        <Squirtle2
          scale={3}
          position-y={-0.7}
          hovered={hovered === "squirtle"}
        />
      </PokeStage>
    </>
  );
}

export default PokeThreeJs;
