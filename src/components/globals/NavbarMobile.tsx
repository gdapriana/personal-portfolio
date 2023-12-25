"use client"
import Image from "next/image";
import profile from "@/assets/images/apriana.png";
import metadata from "@/data/SideNavbar"
import { CheckBadgeIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useState } from "react";
import { useTheme } from "next-themes";

const NavbarMobile = () => {
  const { theme, setTheme } = useTheme();
  const [showFloatNav, setShowFloatNav] = useState(false)
  return (
    <> 
      <FloatNav showFloatNav={showFloatNav} setShowFloatNav={setShowFloatNav} />
      <div className="flex justify-between gap-4 items-center">
        <div className="flex justify-center items-center gap-4">
          <div className="flex justify-center items-center">
            <Image
              width={200}
              height={200}
              className="w-12 h-12 rounded-full grayscale"
              src={profile.src}
              alt="Rounded avatar"
            />
          </div>
          <div className="">
            <p className="text-neutral-600 font-bold">{metadata.name} <CheckBadgeIcon className="w-5 inline text-blue-500" /></p>
            <p className="text-neutral-400 text-sm">{metadata.tag}</p>
          </div>
        </div>
        <div className="ms-auto" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {
            theme === "dark" ? <MoonIcon className="w-5" /> : <SunIcon className="w-5" />
          }
        </div>
        <div className="" onClick={() => setShowFloatNav(true)}>
          <Bars3Icon className="w-8" />
        </div>
      </div>

    </>
  )
}

const FloatNav = ({showFloatNav, setShowFloatNav}: {showFloatNav: any; setShowFloatNav: any}) => {
  return (
    <div className={`${showFloatNav ? "flex" : "hidden"} absolute duration-300 ease-in-out top-0 h-screen w-full justify-center items-center left-0 z-30 bg-white dark:bg-neutral-900`}>
      <div className="absolute top-0 m-4 right-0" onClick={() => setShowFloatNav(false)}>
        <XMarkIcon className="w-8 text-neutral-600 dark:text-neutral-400" />
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        {
          metadata.navigations.map((item, index) => {
            return (
              <Link onClick={() => {setShowFloatNav(false)}} href={item.path} key={index} className="max-w-2xl gap-2 w-full rounded-lg p-3 border-slate-400 dark:border-slate-800 border flex justify-center items-center">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={item.icon}
                    />
                    </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-neutral-600 dark:text-neutral-200">{item.name}</p>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  ) 
}

export default NavbarMobile
