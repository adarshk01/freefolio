import { Achieve } from "./Achieve";
export function Home() {
  return (
    <div className={` relative   `}>
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
      <div className="mt-10 flex gap-16">
        <Achieve count={3} tagLine={"YEARS OF EXPERIENCE"} />
        <Achieve count={5} tagLine="PROJECTS COMPLETED" />
        <Achieve count={0} tagLine="READY TO COLLABORATE" />
      </div>
      <div className="h-fit w-96 bg-lime-400 p-5 rounded-xl mt-16 relative overflow-hidden">
        <div className="relative z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
            />
          </svg>

          <div className="text-white text-2xl mt-2 font-semibold  ">
            What I'm Currently Doing{" "}
          </div>
          <div className="text-white mt-1   font-lg">
            Studying smart contracts and decentralized applications on Ethereum
            and Solana.
          </div>
        </div>
        <svg
          className="w-80 h-72 z-80  absolute -top-10 -left-7 stroke-green-400"
          viewBox="0 0 111 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.0765 27.2486C26.1015 26.7012 22.2413 26.4661 17.9912 29.1784C14.4117 31.4627 11.1985 34.3891 8.58691 37.738C4.29615 43.2402 0.336537 52.039 2.24142 59.2246C4.98617 69.5784 16.8366 73.6018 26.4625 74.5225C32.2991 75.0807 36.8134 76.705 42.0015 79.2989C47.4455 82.0208 52.9625 83.0126 59.0575 82.5448C75.1997 81.3059 86.5715 66.0366 97.7023 55.901C102.262 51.7489 106.83 47.1506 108.433 41.0086C110.209 34.2 109.841 28.1289 107.511 21.538C102.999 8.77718 89.8609 0.953284 76.6103 1.72494C63.5784 2.48385 54.9919 14.6445 45.2562 21.8461C38.9055 26.5438 33.3725 25.9365 26.0188 26.6718"
            stroke="stroke-green-400"
            strokeWidth="1.70404"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
