export function HeroImage() {
  return (
    <div
      className="absolute right-0 top-0 hidden h-full w-1/2 bg-secondary md:flex"
      style={{
        clipPath:
          "polygon(120px 0%, 100% 0, 100% 30%, 100% 70%, 100% 100%, 120px 100%, 0 calc(100% - 128px), 0% 128px)",
      }}
    >
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
