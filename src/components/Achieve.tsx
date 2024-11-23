interface childProps {
  count: number;
  tagLine: string;
}

export function Achieve({ count, tagLine }: childProps) {
  return (
    <div>
      <div
        className={`text-white font-bold ${
          count ? "text-7xl" : "text-2xl text-wrap mr-28"
        }`}
      >
        +{count != 0 ? count : "Coming Soon"}
      </div>

      <div className={`text-greyText   text-wrap ${count ? "mt-0" : "mt-2"}`}>
        {tagLine}
      </div>
    </div>
  );
}
