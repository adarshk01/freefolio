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
      <div className="mt-10 flex gap-10 w-full">
        <InputTag header={"Name"} />
        <InputTag header={"Email"} />
      </div>
    </div>
  );
}
