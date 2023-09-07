import { useState, useEffect } from "react";

export default function useIsFixedScroll( object : { elementById : string } ) {
  const { elementById } = object;
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const $filterSection = document.getElementById(`${elementById}`);
    const initialOffsetTop = $filterSection?.offsetTop ?? 0;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop >= initialOffsetTop) setIsFixed(true);
      else setIsFixed(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementById]);


  return { isFixed }
}