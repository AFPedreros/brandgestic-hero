import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HeroImage } from "@/components/hero-image";
import { HeroFooter } from "./components/hero-footer";

function App() {
  return (
    <div className="relative flex-col flex h-screen w-full">
      <HeroImage />

      <Header />

      <Hero />

      <HeroFooter />
    </div>
  );
}

export default App;
