import "./App.css";
import { Ldiv } from "./components/Ldiv";
import { NavBar } from "./components/NavBar";
import { Rdiv } from "./components/Rdiv";

function App() {
  return (
    <div className="flex justify-center h-screen xl:pt-16 bg-gradient-to-br from-zinc-950 from-50% to-zinc-900 pt-4 pb-0.5 relative">
      <div className=" absolute z-40 flex justify-center mt-[-55px] ">
        <NavBar />
      </div>
      <div className="grid grid-cols-12 mx-52 h-full   relative  xl:w-screen md:w[300px]">
        <div
          className="col-span-3 border bg-gray-100 border-stone-1000 rounded-2xl overflow-hidden xl:sticky  w-fit text-nowrap px-8
         inset-y-16   h-fit  pb-60 "
        >
          <Ldiv />
        </div>
        <div className="col-span-9 ml-36 overflow-hidden  flex justify-center mt-[-25px] mb-10">
          <Rdiv />
        </div>
      </div>
    </div>
  );
}

export default App;
