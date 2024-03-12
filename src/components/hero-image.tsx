export function HeroImage() {
  return (
    <div
      className="absolute top-0 h-full right-0 w-1/2 z-30 hidden md:flex"
      style={{
        backgroundImage: "url(/images/background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}
