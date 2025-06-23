import MainComponent from "@/components/MainComponent";
import Image from "next/image";

export default function Home() {
  return (
    <div className={`w-full h-full selection:bg-neutral-400 selection:text-white`}>
      <MainComponent />
    </div>
  );
}
