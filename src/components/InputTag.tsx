interface propType {
  header: string;
  desc: string;
  updateState: (newState: string) => void;
}

export function InputTag({ header, desc, updateState }: propType) {
  return (
    <div className="mb-5">
      <div className="text-neutral-400 text-sm mb-2.5 font-light">{header}</div>
      <div className=" ">
        <input
          type="text"
          onChange={function (e) {
            updateState(e.target.value);
          }}
          placeholder={desc}
          className={`h-10  lg:w-full lg:min-w-[330px] w-[450px]  rounded-xl bg-[#353334]     text-sm pl-4 text-white   focus:outline-none focus:ring-2 focus:ring-lime-400   transition  duration-300  `}
        />
      </div>
    </div>
  );
}
