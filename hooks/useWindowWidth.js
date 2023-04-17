import { useState, useEffect } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = useState();

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return width;
}
