import { useEffect, useState } from "react";
import { Home } from "./Home";
import { Projects } from "./Projects";

export function Rdiv() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`transition-all duration-[1500ms] ease-out transform  mb-5
    ${isVisible ? "opacity-100 translate-y-7" : "opacity-0 translate-y-0"}`}
    >
      <Home />
      <Projects />
    </div>
  );
}
