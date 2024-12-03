import { ExpItem } from "./ExpItem";

export function Experience() {
  return (
    <div>
      <h1 className="mt-28 ">
        <div className="   text-white lg:text-8xl text-4xl font-bold leading-none select-none  lg:flex-none flex justify-center lg:justify-start">
          3 YEARS OF{" "}
        </div>
        <div className="  text-neutral-700  lg:text-8xl text-4xl font-bold leading-none select-none  lg:flex-none flex justify-center lg:justify-start">
          EXPERIENCE
        </div>
      </h1>
      <div className="mt-5">
        <ExpItem
          title="Tech Mahindra"
          desc="Led the development team in creating intuitive web and mobile applications, enhancing user experience and driving higher engagement."
          duration="Aug 2021-Apr 2024"
        />
      </div>
    </div>
  );
}
