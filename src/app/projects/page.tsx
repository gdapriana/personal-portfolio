"use client";
import { useState } from "react";
import Header from "@/components/globals/Header";
import ViewButton from "@/components/projects/ViewButton";
import ProjectSection from "@/components/projects/ProjectSection";
import Divider from "@/components/globals/Divider";

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
    </div>
  );
}
