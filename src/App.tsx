import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

function App() {
  return (
    <div className="relative bg-background flex-col flex h-screen w-full">
      <Header />

      <Hero />

      <div className="h-28 w-full bg-[#F6FCD5]"></div>
    </div>
  );
}

export default App;
