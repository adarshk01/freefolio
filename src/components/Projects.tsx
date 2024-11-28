import { ProjItem } from "./ProjItem";

export function Projects() {
  return (
    <div>
      <h1 className="mt-28 ">
        <div className="block  text-white text-8xl font-bold leading-none select-none">
          RECENT{" "}
        </div>
        <div className="block text-neutral-700  text-8xl font-bold leading-none select-none">
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
