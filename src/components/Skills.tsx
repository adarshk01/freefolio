import { skillSvg } from "../svg/SkillSvg";
import { SKillCard } from "./SkillCard";

export function Skills() {
  return (
    <div>
      <h1 className="mt-28 ">
        <div className="   text-white lg:text-8xl text-4xl font-bold leading-none select-none  lg:flex-none flex justify-center lg:justify-start">
          POWER
        </div>
        <div className="  text-neutral-700  lg:text-8xl text-4xl font-bold leading-none select-none  lg:flex-none flex justify-center lg:justify-start">
          STACK
        </div>
      </h1>
      <div className="mt-5">
        <div className="flex flex-row flex-wrap gap-2.5">
          {Object.keys(skillSvg).map((key) => {
            const [logo, title, desc] = skillSvg[key];

            return (
              <SKillCard key={key} logo={logo} title={title} desc={desc} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
