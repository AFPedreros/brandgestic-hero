export function HeroImage() {
  return (
    <div
      className="absolute bg-[#D2ABE4] top-0 h-full right-0 w-1/2  hidden md:flex"
      
    >

      <div className="w-full h-full z-40" style={{
        backgroundImage: "url(/images/background-hero.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>

      </div>
    </div>
  );
}
