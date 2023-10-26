import Image from "next/image";
import Link from "next/link";
import GithubIcon from "@/assets/images/github2.png";

export default function ProjectCard({ data }: { data: any }) {
  return (
    <div className="max-w-sm flex flex-col overflow-hidden bg-white border border-gray-200 rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
      <div
        className="w-full bg-cover grayscale h-12"
        style={{
          backgroundImage: `url(https://source.unsplash.com/random/1920x1080?${data.language.title})`,
        }}
      ></div>
      <div className="w-full flex p-4 gap-4 justify-center items-center">
        <div className="">
          <Image
            className="w-8"
            width={1000}
            height={1000}
            src={data.language.icon}
            alt="image"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold cutoff-text cutoff-text-1 text-neutral-600 text-base dark:text-neutral-200">
              {data.title}
            </h1>
            <p className="cutoff-text text-xs text-neutral-400 cutoff-text-2">
              {data.description}
            </p>
          </div>
          <div className="flex mt-4 w-full gap-2 justify-between">
            <div className="gap-2 hidden sm:flex overflow-x-auto md:hidden lg:flex justify-center items-center">
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
            <div className="flex justify-center items-center">
              <Link
                href={data.github}
                target="_blank"
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
}
