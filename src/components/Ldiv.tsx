import { useState, useEffect, useRef } from "react";
import pic from "../assets/round.png";
import { Svg } from "../svg/Svg";

export function Ldiv() {
  const [svgCount] = useState(15); // You can adjust this number as needed
  const svgArray = Array(svgCount).fill(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="auto-rows-fr xl:h-full font-sans relative"
      ref={containerRef}
    >
      <div className=" flex    lg:block">
        <div className="lg:flex lg:justify-center relative  p-4 lg:p-0 z-10">
          <img className="lg:h-60 h-20 rounded-2xl  mt-5" src={pic} alt="" />{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="absolute h-32 w-32 z-30 stroke-amber-600 fill-amber-600 left-28 rotate-45 top-[-20px]"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 100 125"
            enable-background="new 0 0 100 100"
            xmlSpace="preserve"
          >
            <g>
              <path d="M83.84375,38.8251953c-0.53125,0-1.1035156,0.3574219-1.8476563,1.1572266L72.6132813,46.8125L56.1582031,25.3046875   c-0.2851563-0.4111328-1.0517578-1.1074219-2.1220703-1.1074219c-1.0498047,0-2.1054688,0.6445313-3.1357422,1.9160156   L33.8554688,47.1494141l-17.7841797-9.6416016c-0.2597656-0.1396484-0.5761719-0.1162109-0.8095703,0.0605469   c-0.234375,0.1777344-0.34375,0.4755859-0.2792969,0.7626953l7.8564453,35.03125   c0.0859375,0.3828125,0.4521484,0.6308594,0.8408203,0.578125c9.3212891-1.375,18.2402344-2.0722656,26.5068359-2.0722656   c19.3378906,0,28.8740234,3.8388672,28.96875,3.8779297c0.0917969,0.0380859,0.1884766,0.0566406,0.2861328,0.0566406   c0.1289063,0,0.2578125-0.0332031,0.3720703-0.0996094c0.2011719-0.1142578,0.3378906-0.3164063,0.3701172-0.5458984l4.7958984-34   c0.0673828-0.3994141,0.1728516-1.3867188-0.2978516-1.9433594C84.4707031,38.9628906,84.1728516,38.8251953,83.84375,38.8251953z    M83.4980469,40.9277344L78.828125,74.0273438c-2.8056641-0.9628906-12.1298828-3.6591797-28.6416016-3.6591797   c-8.1357422,0-16.8916016,0.6689453-26.0361328,1.9873047l-7.34375-32.7431641l16.8818359,9.1523438   c0.3173828,0.1728516,0.7128906,0.09375,0.9404297-0.1865234l17.4375-21.5205078   c0.7207031-0.8896484,1.4023438-1.3603516,1.9697266-1.3603516c0.5439453,0,0.8798828,0.4492188,0.9091797,0.4902344   l16.921875,22.1181641c0.2480469,0.3222656,0.7070313,0.3916016,1.0371094,0.1503906l10.0341797-7.3037109   c0.0400391-0.0292969,0.0771484-0.0625,0.1113281-0.0996094c0.2001953-0.2177734,0.3603516-0.3720703,0.4833984-0.4804688   C83.5283203,40.6894531,83.5166016,40.8134766,83.4980469,40.9277344z" />
              <path d="M76.2900391,69.5839844c-21.8408203-5.6972656-39.6669922-2.0576172-39.84375-2.0195313   c-0.4052734,0.0849609-0.6650391,0.4824219-0.5791016,0.8876953c0.0849609,0.40625,0.4873047,0.6630859,0.8876953,0.5800781   c0.1738281-0.0390625,17.6777344-3.5986328,39.15625,2.0029297c0.0634766,0.0166016,0.1269531,0.0244141,0.1904297,0.0244141   c0.3330078,0,0.6367188-0.2236328,0.7246094-0.5605469C76.9306641,70.0976563,76.6904297,69.6884766,76.2900391,69.5839844z" />
              <path d="M62.8271484,42.6464844c0.1474609,0.1953125,0.3710938,0.2978516,0.5986328,0.2978516   c0.1572266,0,0.3164063-0.0498047,0.4511719-0.1523438c0.3310547-0.25,0.3955078-0.7197266,0.1455078-1.0498047L59.625,35.9306641   c-0.2490234-0.3310547-0.7197266-0.3974609-1.0498047-0.1455078c-0.3310547,0.25-0.3955078,0.7197266-0.1455078,1.0498047   L62.8271484,42.6464844z" />
              <path d="M56.2822266,60.6953125c3.0302734,0,5.4238281-3.5224609,5.6923828-8.3769531   c0.203125-3.6923828-0.9667969-5.75-1.984375-6.8251953c-0.9970703-1.0537109-2.3144531-1.6337891-3.7080078-1.6337891   c-1.2402344,0-2.5664063,0.6064453-3.6376953,1.6630859c-0.2949219,0.2910156-0.2988281,0.765625-0.0078125,1.0605469   c0.2900391,0.2958984,0.7666016,0.2978516,1.0605469,0.0078125c0.7939453-0.7822266,1.7353516-1.2314453,2.5849609-1.2314453   c0.9912109,0,1.8964844,0.4033203,2.6181641,1.1650391c1.1523438,1.2177734,1.7119141,3.2460938,1.5761719,5.7119141   c-0.21875,3.9667969-2.0224609,6.9589844-4.1943359,6.9589844c-1.9121094,0-3.1708984-2.1152344-4.2099609-7.0712891   c-0.1728516-0.8271484-0.1777344-1.65625-0.0146484-2.4667969c0.0820313-0.4052734-0.1816406-0.8007813-0.5878906-0.8828125   c-0.4091797-0.0820313-0.8017578,0.1816406-0.8828125,0.5878906c-0.203125,1.0097656-0.1972656,2.0419922,0.0166016,3.0693359   C51.5039063,56.7236328,52.8144531,60.6953125,56.2822266,60.6953125z" />
              <path d="M58.2490234,50.7373047C58.2949219,50.7460938,58.3417969,50.75,58.3876953,50.75   c0.3535156,0,0.6689453-0.2509766,0.7363281-0.6123047c0.2958984-1.578125-0.7871094-2.6347656-1.4726563-3.0107422   c-0.3642578-0.1982422-0.8193359-0.0644531-1.0185547,0.2978516c-0.1982422,0.3632813-0.0654297,0.8193359,0.2978516,1.0185547   c0.0087891,0.0048828,0.8916016,0.4990234,0.71875,1.4189453C57.5732422,50.2685547,57.8417969,50.6611328,58.2490234,50.7373047z" />
            </g>
          </svg>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <div className="lg:flex lg:justify-center mt-5  lg:text-3xl font-bold z-20 ">
              ADARSH KAMBLE
            </div>
            <div className="bg-rose-1050 lg:mx-18 flex justify-center mt-4 rounded-lg text-xs py-1.5 lg:px-4  whitespace-nowrap">
              Web developer
            </div>
          </div>
        </div>
      </div>
      {containerSize.width > 0 &&
        containerSize.height > 0 &&
        svgArray.map((_, index) => (
          <div
            key={index}
            className="absolute pointer-events-none"
            style={{
              left: `${Math.random() * containerSize.width + 10}px`,
              top: `${Math.random() * containerSize.height + 300}px`,
              transform: `rotate(${Math.random() * 360}deg) scale(${
                0.3 + Math.random() * 0.8
              })`,
              opacity: 0.5 + Math.random() * 0.5,
              animation: `float ${
                5 + Math.random() * 10
              }s infinite ease-in-out`,
              width: "24px",
              height: "24px",
            }}
          >
            {Svg.x}
          </div>
        ))}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(${Math.random() * 20 - 10}px, ${
        Math.random() * 20 - 10
      }px) rotate(${Math.random() * 20 - 10}deg); }
          50% { transform: translate(${Math.random() * 40 - 20}px, ${
        Math.random() * 40 - 20
      }px) rotate(${Math.random() * 40 - 20}deg); }
          75% { transform: translate(${Math.random() * 40 - 10}px, ${
        Math.random() * 20 - 10
      }px) rotate(${Math.random() * 20 - 10}deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-float {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}