import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <h2 className="text-5xl hero-text font-bold text-white">
        {progress.toFixed(0)}% Loaded
      </h2>
    </Html>
  );
}
