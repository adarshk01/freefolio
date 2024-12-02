interface propsType {
  logo: React.ReactNode;
  title: String;
  desc: String;
}

export function SKillCard({ logo, title, desc }: propsType) {
  return (
    <div>
      <div className="hover:bg-zinc-900 hover:rounded-xl p-4 cursor-pointer  transition-all duration-500 ease-in-out  pr-20 w-full min-w-[325px]">
        <div className="flex gap-3.5 items-stretch">
          <div className="h-fit w-fit p-2 bg-white rounded-lg  flex justify-start items-center">
            {logo}
          </div>
          <div className="flex flex-col justify-center flex-grow">
            <div className="text-white text-2xl font-semibold ">{title}</div>
            <div className="text-neutral-500 font-medium ">{desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
