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
      className="flex justify-center h-fit xl:pt-16 bg-gradient-to-br from-zinc-950 from-50% to-zinc-900 pt-4 pb-0.5 relative
     selection:bg-lime-400 selection:text-zinc-900"
    >
      <div className=" fixed z-40 flex justify-center mt-[-55px] ">
        <NavBar />
      </div>
      <div className="grid grid-cols-12 mx-52 h-full   relative  xl:w-screen md:w[300px]">
        <div
          className={`col-span-3 border bg-gray-100 border-stone-1000 rounded-2xl   overflow-hidden xl:sticky  w-fit text-nowrap px-7
         inset-y-16   h-fit  pb-0 transition-all duration-[750ms] ease-out transform   ${
           isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
         }`}
        >
          <Ldiv />
        </div>
        <div className="col-span-9 ml-36  flex justify-center mt-[-25px] mb-10">
          <Rdiv />
        </div>
      </div>
    </div>
  );
}

export default App;
