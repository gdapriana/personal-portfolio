import ProjectCard from "@/components/projects/ProjectCard";
import ProjectList from "@/components/projects/ProjectList";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProjectSection ({ view }: { view: string }) {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/api/projects").then((response: any) => setProjects(response.data.projects)).catch((error)=> console.log(error))
  }, [])

  console.log(projects);

  if (view === "card") {
    return (
      <div className="w-full gap-2 grid mt-4 grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {projects.map((item: any) => <ProjectCard key={item._id} data={item} />)}
      </div>
    );
  } else {
    return (
      <div className="w-full mt-4 flex flex-col justify-center gap-2 items-center overflow-hidden">
        {projects.map((item: any) => <ProjectList key={item._id} data={item} />)}
      </div>
    );
  }

};
