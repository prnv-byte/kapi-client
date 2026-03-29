"use client";
import { useEffect, useState } from "react";

export default function ParallaxWrapper({ children }: any) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        transform: `translateY(${offset * 0.1}px)`,
        transition: "transform 0.1s linear",
      }}
    >
      {children}
    </div>
  );
}