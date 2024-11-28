interface propsType {
  title: string;
  desc: string;
}
export function ExpItem({ title, desc }: propsType) {
  return (
    <div
      className="group h-fit w-full hover:bg-zinc-900 hover:rounded-xl p-5 cursor-pointer  transition-all duration-500 ease-in-out 
  flex justify-start gap-7 select-none"
    >
      <div>
        <div className="text-white text-2xl font-semibold ">{title}</div>
        <div className="text-neutral-500 font-medium text-base text-wrap pr-40 mt-3">
          {desc}
        </div>
        <div className="text-neutral-500 font-medium mt-3">
          Aug 2021-Apr 2024
        </div>
      </div>
      <div className="absolute right-5 transition-transform duration-300 ease-in-out group-hover:-translate-y-2 group-hover:translate-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-4 stroke-orange-600 fill-orange-600"
        >
          <path
            fill-rule="evenodd"
            d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
