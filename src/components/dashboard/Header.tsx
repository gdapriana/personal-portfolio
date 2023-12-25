"use client";
import {motion as m} from "framer-motion"

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
  return (
    <m.header initial={{opacity: 0, y: -100}} transition={{duration: 2, ease: "anticipate"}} animate={{opacity: 1, y: 0}} exit={{opacity: 0}} className="w-full gap-4 pt-8 flex justify-center items-start flex-col">
      <div className="h-8">
        <span className="text-3xl font-bold dark:text-neutral-200 __gradient-text">
          Hello World 👋
        </span>
      </div>
      <p className="text-neutral-400 text-lg">
        I&apos;m <span className="font-bold">{metadata.name}</span>, pasonates
        with{" "}
        {metadata.pationates.map((item, index) => (
          <span key={index}>{item}, </span>
        ))}{" "}
        based in <span className="font-bold">{metadata.location}</span>
      </p>
    </m.header>
  );
}
