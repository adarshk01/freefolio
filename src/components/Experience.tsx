import { ExpItem } from "./ExpItem";

export function Experience() {
  return (
    <div>
      <h1 className="mt-28 ">
        <div className="block  text-white text-8xl font-bold leading-none select-none">
          3 YEARS OF{" "}
        </div>
        <div className="block text-neutral-700  text-8xl font-bold leading-none select-none">
          EXPERIENCE
        </div>
      </h1>
      <div className="mt-5">
        <ExpItem
          title="Tech Mahindra"
          desc="Led the development team in creating intuitive web and mobile applications, enhancing user experience and driving higher engagement."
        />
      </div>
    </div>
  );
}
