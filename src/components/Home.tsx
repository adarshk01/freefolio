import { useEffect, useState } from "react";
import { Achieve } from "./Achieve";

export function Home() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`transition-all duration-1000 ease-out transform relative
      ${isVisible ? "opacity-100 translate-y-7" : "opacity-0 translate-y-0"}`}
    >
      <h1 className=" ">
        <div className="block  text-white text-[112px] font-bold leading-none select-none">
          SOFTWARE{" "}
        </div>
        <div className="block text-neutral-700  text-[112px] font-bold leading-none select-none">
          ENGINEER
        </div>
      </h1>
      <div className="mt-5 text-lg font-normal text-pretty mr-24 text-greyText">
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted products.
      </div>
      <div className="mt-10 flex">
        <Achieve count={3} tagLine={"YEARS OF EXPERIENCE & GROWTH"} />
        <Achieve count={5} tagLine="PROJECTS COMPLETED" />
        <Achieve count={0} tagLine="READY TO COLLABORATE WORLDWIDE" />
      </div>
    </div>
  );
}
