import ProfilePhoto from "@/assets/images/apriana.png";
import { parseISO, format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ data }: { data: any }) {
  const date = parseISO(data.createdAt);
  console.log(`A ${date}`);
  return (
    <Link
      href={`blogs/${data?._id}`}
      className="w-full border-b py-4 dark:border-neutral-800 flex flex-col gap-2"
    >
      <header className="w-full gap-2 flex justify-start items-center">
        <div className="w-6 aspect-square grayscale overflow-hidden rounded-full">
          <Image src={ProfilePhoto} alt="profile" />
        </div>
        <p className="text-sm text-neutral-400">
          Uploaded by{" "}
          <span className="text-neutral-600 font-bold">{data?.author}</span>
        </p>
      </header>
      <main className="flex justify-center items-center gap-4 w-full">
        <div className="flex-1 flex flex-col justify-center items-start">
          <h1 className="text-neutral-600 font-bold text-lg cutoff-text cutoff-text-1 dark:text-neutral-200">
            {data?.title}
          </h1>
          <p className="cutoff-text cutoff-text-3 text-sm text-neutral-400">
            {data?.description}
          </p>
        </div>
        <div
          className="w-20 md:w-48 aspect-square md:aspect-video bg-cover rounded-lg"
          style={{ backgroundImage: `url(${data?.cover})` }}
        ></div>
      </main>
      <footer className="w-full flex items-center justify-between">
        <div className="lg:flex justify-center items-center gap-2 hidden">
          {data?.categories?.map((item: string, index: number) => (
            <div
              className="text-sm dark:bg-neutral-800 bg-neutral-200 text-neutral-400 py-2 px-3 rounded-md"
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
        <p className="text-sm text-neutral-400">
          {format(date, "LLLL d, yyyy")}
        </p>
      </footer>
    </Link>
  );
}
