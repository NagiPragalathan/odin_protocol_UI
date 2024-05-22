import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center w-full h-full">
      <NavBar />
      <Hero />
    </div>
  );
}
