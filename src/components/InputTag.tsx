interface propType {
  header: string;
}

export function InputTag({ header }: propType) {
  return (
    <div>
      <div className="text-neutral-400 text-sm mb-2.5">{header}</div>
      <div className=" ">
        <input
          type="text"
          className={`h-12 w-full  rounded-xl bg-stone-700     text-base pl-5 text-neutral-400   focus:outline-none focus:ring-2 focus:ring-lime-400   transition-all duration-300  `}
        />
      </div>
    </div>
  );
}
