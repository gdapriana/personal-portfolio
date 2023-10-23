"use client";
import { useState } from "react";
import { Square2StackIcon, ListBulletIcon } from "@heroicons/react/24/outline";
import LaravelIcon from "@/assets/images/laravel.png";
import GithubIcon from "@/assets/images/github2.png";
import PythonIcon from "@/assets/images/python.png";
import NumPyIcon from "@/assets/images/numpy.svg";
import PandasIcon from "@/assets/images/pandas.png";
import Image from "next/image";
import Link from "next/link";

const metadata: any = {
  title: "Projects",
  subtitle: "Here are the projects that I have worked on so far",
};

export default function Project() {
  const [view, setView] = useState("card");
  return (
    <div className="w-full h-full">
      <Header />
      <Divider />
      <ViewButton />
      <ProjectSection />
      <Pagination />
    </div>
  );
}

const Header = () => {
  return (
    <header className="flex flex-col justify-center items-start gap-2">
      <h1 className="text-3xl text-neutral-600 font-bold dark:text-neutral-200">
        {metadata.title}
      </h1>
      <p className="text-sm text-neutral-400">{metadata.subtitle}</p>
    </header>
  );
};

const ViewButton = () => {
  return (
    <div className="w-full flex justify-end items-center gap-2">
      <p className="text-sm text-neutral-400">Change View</p>
      <div
        data-tooltip-target="cardview-tooltip"
        className="border p-1 rounded-md text-neutral-600 dark:border-neutral-800 cursor-pointer bg-neutral-100 dark:bg-neutral-800"
      >
        <Square2StackIcon className="w-5" />
      </div>

      <div className="border dark:border-neutral-800 p-1 rounded-md text-neutral-600 cursor-pointer">
        <ListBulletIcon className="w-5" />
      </div>
    </div>
  );
};
const ProjectSection = () => {
  return (
    <div className="w-full gap-2 grid mt-4 grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};
const ProjectCard = () => {
  return (
    <div className="max-w-sm flex flex-col relative overflow-hidden bg-white border border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-800">
      <div
        className="w-full bg-cover grayscale h-12"
        style={{
          backgroundImage:
            "url(https://source.unsplash.com/random/1920x1080?programming)",
        }}
      ></div>
      <div className="w-full flex p-4 gap-4 justify-center items-center">
        <div className="">
          <Image className="w-8" src={LaravelIcon} alt="image" />
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold cutoff-text cutoff-text-1 text-neutral-600 text-base dark:text-neutral-200">
              Indonesian Literature
            </h1>
            <p className="cutoff-text text-xs text-neutral-400 cutoff-text-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            </p>
          </div>
          <div className="flex mt-4 w-full gap-2 justify-between">
            <div className="gap-2 hidden sm:flex overflow-x-auto md:hidden lg:flex justify-center items-center">
              <Image src={PythonIcon} alt="python" className="grayscale w-4" />
              <Image src={NumPyIcon} alt="python" className="grayscale w-4" />
              <Image
                src={PandasIcon}
                alt="python"
                className="grayscale h-4 w-4"
              />
            </div>
            <div className="flex justify-center items-center">
              <Link
                href="http://localhost:3000"
                className="flex gap-1 dark:border-neutral-800 dark:bg-neutral-800 text-neutral-400 border py-1 px-2 rounded-md text-xs justify-center items-center"
              >
                View{" "}
                <div className="bg-white rounded-full">
                  <Image className="w-4" src={GithubIcon} alt="github" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Pagination = () => {
  return <div className=""></div>;
};
const Divider = () => {
  return <div className="w-full dark:border-neutral-800 border-b my-4"></div>;
};
