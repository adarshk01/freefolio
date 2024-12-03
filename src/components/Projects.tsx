import { ProjItem } from "./ProjItem";

export function Projects() {
  return (
    <div>
      <h1 className="mt-28 ">
        <div className="   text-white lg:text-8xl text-4xl font-bold leading-none select-none lg:flex-none flex justify-center lg:justify-start">
          RECENT{" "}
        </div>
        <div className="  text-neutral-700  lg:text-8xl text-4xl font-bold leading-none select-none lg:flex-none flex justify-center lg:justify-start">
          PROJECTS
        </div>
      </h1>
      <div className="mt-5">
        <ProjItem
          title={"Web3 Wallet"}
          desc={
            "Built a secure Web3 wallet for seamless blockchain interactions."
          }
        />
        <ProjItem
          title={"Scribbl"}
          desc={
            "Created multiplayer drawing and guessing game with real-time interaction and dynamic gameplay."
          }
        />
        <ProjItem
          title="Ai Tool"
          desc="Built an AI tool to streamline tasks and improve decision-making."
        />
      </div>
    </div>
  );
}
