import ProjectCard from "@/components/projects/ProjectCard";
import ProjectList from "@/components/projects/ProjectList";
import { useEffect, useState } from "react";
import LoadingAnimation from "@/components/globals/LoadingAnimation";
import axios from "axios";

export default function ProjectSection({ view }: { view: string }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_LINK}/api/projects`)
      .then((response: any) => setProjects(response.data.projects))
      .catch((error) => console.log(error));
  }, []);

  if (projects.length !== 0) {
    if (view === "card") {
      return (
        <div className="w-full flex-1 overflow-auto auto-rows-max gap-4 grid mt-4 grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {projects.map((item: any) => (
            <ProjectCard key={item._id} data={item} />
          ))}
        </div>
      );
    } else {
      return (
        <div className="w-full flex-1 mt-4 flex flex-col justify-start gap-2 items-center overflow-hidden">
          {projects.map((item: any) => (
            <ProjectList key={item._id} data={item} />
          ))}
        </div>
      );
    }
  } else {
    return (
      <div className="w-full flex flex-1 justify-center items-center">
        <LoadingAnimation />
      </div>
    );
  }
}
