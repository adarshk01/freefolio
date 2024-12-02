import { InputTag } from "./InputTag";

export function Contact() {
  return (
    <div>
      <h1 className="mt-28 ">
        <div className="block  text-white text-8xl font-bold leading-none select-none">
          LET'S WORK
        </div>
        <div className="block text-neutral-700  text-8xl font-bold leading-none select-none">
          TOGETHER
        </div>
      </h1>
      <div className="mt-10 flex gap-5 w-full">
        <InputTag header={"Name"} desc="Your Name" />
        <InputTag header={"Email"} desc="Your@email.com" />
      </div>
      <div className="mt-5">
        {" "}
        <div className="text-neutral-400 text-sm mb-2.5 font-light">
          Message
        </div>
        <div className=" ">
          <textarea
            placeholder="Message"
            className={`h-28  w-full min-w-[300px]  rounded-xl bg-[#353334]     pt-3  text-base pl-4 text-white   focus:outline-none focus:ring-2 focus:ring-lime-400   transition  duration-300  `}
          />
        </div>
      </div>
      <div className="mt-5 flex justify-end">
        <button
          className="bg-lime-400 
         hover:bg-lime-500  transition-all  duration-300 ease-in-out 
         text-sm p-2.5 rounded-xl px-5 font-medium "
        >
          Submit
        </button>
      </div>
    </div>
  );
}
