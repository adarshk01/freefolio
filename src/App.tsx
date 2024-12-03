import { useEffect, useState } from "react";
import "./App.css";
import { Ldiv } from "./components/Ldiv";
import { NavBar } from "./components/NavBar";
import { Rdiv } from "./components/Rdiv";

function App() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className="flex justify-center h-fit w-fit lg:w-auto xl:pt-16 bg-gradient-to-br from-zinc-950 from-50% to-zinc-900 pt-4 pb-0.5 relative
     selection:bg-lime-400 selection:text-zinc-900"
    >
      <div className=" fixed z-40 flex justify-center lg:mt-[-55px] ">
        <NavBar />
      </div>
      <div className="lg:grid lg:grid-cols-12 lg:mx-52 mx-2.5 h-full mt-16 lg:mt-0 relative lg:gap-24 xl:w-screen md:w[300px]">
        <div
          className={`lg:col-span-3 border bg-gray-100 border-stone-1000 rounded-2xl   overflow-hidden xl:sticky  w-fit text-nowrap px-7
         inset-y-16   h-fit  pb-0 transition-all duration-[750ms] ease-out transform  mx-10  lg:mx-10  ${
           isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
         }`}
        >
          <Ldiv />
        </div>
        <div className="lg:col-span-9 lg:ml-36 ml-0  flex justify-center mt-[-25px] mb-10">
          <Rdiv />
        </div>
      </div>
    </div>
  );
}

export default App;
