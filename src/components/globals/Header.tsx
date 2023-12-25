"use client"
import {motion as m} from "framer-motion"
export default function Header({metadata}: {metadata: {title: string, subtitle: string}}) {
  return (
    <m.header initial={{opacity: 0, y: -100}} transition={{duration: 2, ease: "anticipate"}} animate={{opacity: 1, y: 0}} exit={{opacity: 0}} className="flex w-full flex-col py-8 justify-center items-start gap-2">
      <h1 className="text-3xl __gradient-text font-bold dark:text-neutral-200">
        {metadata.title}
      </h1>
      <p className="text-sm text-neutral-400">{metadata.subtitle}</p>
    </m.header>
  )
}
