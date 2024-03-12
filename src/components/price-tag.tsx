export function PriceTag() {
  return (
    <div
      className="relative flex w-fit bg-foreground"
      style={{
        clipPath:
          "polygon(12px 0%, calc(100% - 40px) 0%, 100% 40px, 100% 100%, calc(100% - 12px) 100%, 12px 100%, 0px 100%, 0px 0px)",
      }}
    >
      <div
        className="rotate-180 bg-accent p-2 text-center text-[12px] font-black uppercase text-primary-foreground"
        style={{ writingMode: "vertical-rl" }}
      >
        Covered
      </div>
      <div className="relative flex flex-col px-8 py-6">
        <div className="absolute left-8 top-6 flex size-8 -translate-x-2/3 -translate-y-1/3 items-center justify-center rounded-full bg-primary text-center text-xl font-black text-background">
          $
        </div>
        <span className="z-40 text-4xl font-black text-background">500k</span>
        <span className="font-bold text-background">$10.99 / month</span>
      </div>
    </div>
  );
}
