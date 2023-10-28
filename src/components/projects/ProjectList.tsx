import Image from "next/image";
import LaravelIcon from "@/assets/images/laravel.png";
import PythonIcon from "@/assets/images/python.png";
import NumPyIcon from "@/assets/images/numpy.svg";
import PandasIcon from "@/assets/images/pandas.png";
import Link from "next/link";
import GithubIcon from "@/assets/images/github2.png";

export default function ProjectList({ data }: any) {
  return (
    <div className="w-full gap-2 border-b dark:border-neutral-800 p-4 flex justify-center items-center">
      <div className="">
        <Image
          className="w-8"
          width={1000}
          height={1000}
          src={data.language.icon}
          alt={"icon"}
        />
      </div>
      <div className="flex-1 flex justify-start items-center gap-4">
        <h1 className="text-base font-bold whitespace-nowrap text-neutral-600">
          {data.title}
        </h1>
        <div className="text-neutral-200 hidden md:flex"> | </div>
        <div className="hidden md:flex">
          <p className="cutoff-text cutoff-text-1 text-sm text-neutral-400">
            {data.description}
          </p>
        </div>
      </div>
      <div className="gap-2 hidden md:flex overflow-x-auto justify-center items-center">
        {data.technology.map((item: any, index: number) => (
          <Link key={index} href={item.link}>
            <Image
              src={item.icon}
              width={1000}
              height={1000}
              alt="python"
              className="w-4 grayscale"
            />
          </Link>
        ))}
      </div>
      <div className="">
        <Link
          href={data.github}
          className="flex gap-1 dark:border-neutral-800 dark:bg-neutral-800 text-neutral-400 border py-1 px-2 rounded-md text-xs justify-center items-center"
        >
          View{" "}
          <div className="bg-white rounded-full">
            <Image className="w-4" src={GithubIcon} alt="github" />
          </div>
        </Link>
      </div>
    </div>
  );
}
