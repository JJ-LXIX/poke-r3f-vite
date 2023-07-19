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
}
