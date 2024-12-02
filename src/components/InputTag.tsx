interface propType {
  header: string;
  desc: string;
}

export function InputTag({ header, desc }: propType) {
  return (
    <div>
      <div className="text-neutral-400 text-sm mb-2.5 font-light">{header}</div>
      <div className=" ">
        <input
          type="text"
          placeholder={desc}
          className={`h-10  w-full min-w-[330px]  rounded-xl bg-[#353334]     text-sm pl-4 text-white   focus:outline-none focus:ring-2 focus:ring-lime-400   transition  duration-300  `}
        />
      </div>
    </div>
  );
}
