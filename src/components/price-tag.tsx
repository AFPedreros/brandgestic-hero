export function PriceTag() {
  return (
    <div
      className="w-fit relative bg-white flex"
      style={{
        clipPath:
          "polygon(12px 0%, calc(100% - 40px) 0%, 100% 40px, 100% 100%, calc(100% - 12px) 100%, 12px 100%, 0px 100%, 0px 0px)",
      }}
    >
      <div
        className="rotate-180 text-center font-black p-2 uppercase text-[12px] bg-[#F6FCD5] text-black"
        style={{ writingMode: "vertical-rl" }}
      >
        Covered
      </div>
      <div className="flex relative py-6 px-8 flex-col">
        <div className="absolute text-center -translate-y-1/3 -translate-x-2/3 flex items-center justify-center rounded-full font-black top-6 left-8 size-8 text-xl bg-[#EAFF6C] text-background">
          $
        </div>
        <span className="text-background z-40 font-black text-4xl">500k</span>
        <span className="text-background font-bold">$10.99 / month</span>
      </div>
    </div>
  );
}
