"use client";
// import Typed from "@types/typed.js";
import { useRef, useEffect } from "react";

const metadata: {
  name: string;
  pationates: string[];
  greetings: string[];
  location: string;
} = {
  name: "Gede Apriana",
  pationates: ["Web Developer", "Product and UI/UX Designer"],
  greetings: ["Halo", "Hello", "Bonjour", "いらっしゃいませ", "欢迎", "환영"],
  location: "Bali, Indonesia",
};

export default function Header() {
  // const el = useRef(null);
  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: metadata.greetings,
  //     typeSpeed: 100,
  //     loop: true,
  //     showCursor: false,
  //   });
  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);
  return (
    <header className="w-full gap-4 pt-20 flex justify-center items-start flex-col">
      <div className="h-8">
        <span className="text-3xl font-bold text-neutral-400">
          いらっしゃいませ
        </span>
      </div>
      <h1 className="text-neutral-600 text-lg">
        I&apos;m <span className="font-bold">{metadata.name}</span>, pasonates
        with{" "}
        {metadata.pationates.map((item, index) => (
          <span key={index}>{item}, </span>
        ))}{" "}
        based in <span className="font-bold">{metadata.location}</span>
      </h1>
    </header>
  );
}
