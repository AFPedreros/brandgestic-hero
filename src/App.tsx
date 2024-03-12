import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HeroImage } from "@/components/hero-image";

function App() {
  return (
    <div className="relative flex-col flex h-screen w-full">
      <HeroImage />

      <Header />

      <Hero />

      <div className="h-28 w-full bg-[#F6FCD5]"></div>
    </div>
  );
}

export default App;
