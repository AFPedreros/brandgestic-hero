export function HeroImage() {
  return (
    <div className="absolute right-0 top-0 hidden h-full w-1/2 bg-secondary md:flex">
      <div
        className="z-40 h-full w-full"
        style={{
          backgroundImage: "url(/images/background-hero.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}
