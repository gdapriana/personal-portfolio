"use client";
import { useState } from "react";
import Header from "@/components/projects/Header"
import ViewButton from "@/components/projects/ViewButton";
import Pagination from "@/components/projects/Pagination";
import ProjectSection from "@/components/projects/ProjectSection";

const metadata: any = {
  title: "Projects",
  subtitle: "Here are the projects that I have worked on so far",
};

export default function Project() {
  const [view, setView] = useState("card");
  return (
    <div className="w-full h-full flex flex-col justify-start items-center overflow-hidden">
      <Header metadata={metadata} />
      <Divider />
      <ViewButton view={view} setView={setView} />
      <ProjectSection view={view} />
      <Pagination />
    </div>
  );
}




const Divider = () => {
  return <div className="w-full dark:border-neutral-800 border-b my-4"></div>;
};
