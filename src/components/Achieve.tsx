interface childProps {
  count: number;
  tagLine: string;
}

export function Achieve({ count, tagLine }: childProps) {
  return (
    <div>
      <div
        className={`text-white  font-bold  ${
          count ? "lg:text-7xl text-5xl" : "text-3xl text-wrap w-28 "
        }`}
      >
        +{count != 0 ? count : "Coming Soon"}
      </div>

      <div
        className={`text-greyText w-20  text-wrap ${count ? "mt-0" : "mt-0"}`}
      >
        {tagLine}
      </div>
    </div>
  );
}
