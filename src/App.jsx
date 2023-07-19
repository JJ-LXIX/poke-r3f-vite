import PokeThreeJsCard from "/src/components/PokeThreeJsCard";
import Loader from "/src/components/Loader";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import speechBubble from "/src/assets/speech-bubble.png";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (window.innerWidth < 1340) {
      setIsMobile(true);
    }
  }, []);
  if (isMobile)
    return (
      <div className="bg-black flex items-center justify-center h-screen w-full">
        <h1
          className={`text-lg text-white font-semibold hero-text text-center p-2`}
        >
          Please visit from a Larger Screen Device! (at least 1350px wide)
        </h1>
      </div>
    );

  return (
    <main className="min-h-screen bg-white">
      <div className="h-[100vh] w-full">
        <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
          <Suspense fallback={<Loader />}>
            <color attach="background" args={["#000"]} />
            <PokeThreeJsCard active={active} setActive={setActive} />
          </Suspense>
        </Canvas>

        {/* TEXT (text-[#ffcb05])*/}
        <h1
          className={
            active
              ? `hero-text opacity-0 absolute bottom-14 left-10 text-6xl text-black font-outline-2 transition-all duration-300`
              : `hero-text opacity-100 absolute bottom-14 left-10 text-6xl text-black font-outline-2 transition-all duration-300`
          }
        >
          Generation 1
        </h1>

        <div
          className={
            active
              ? `opacity-0 absolute top-10 right-10 h-[10rem] w-[45rem]`
              : `opacity-100 absolute top-10 right-10 h-[10rem] w-[45rem]`
          }
        >
          <img
            src={speechBubble}
            fill
            alt="double click on the pokemon cards"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </main>
  );
}
