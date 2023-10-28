import { parseISO, format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export default function AccomplishmentCard({ data }: { data: any }) {
  const date = parseISO(data.publicationDate);
  return (
    <Link
      href={data?.credentialUrl}
      target="_blank"
      className="flex flex-col rounded-b-xl dark:border-neutral-800 border justify-center items-center"
    >
      <div className="w-full">
        <div
          className="w-full aspect-video bg-cover"
          style={{ backgroundImage: `url(${data?.credentialImage})` }}
        ></div>
      </div>
      <div className="w-full gap-4 flex p-4 justify-center items-center">
        <div className="hidden sm:flex">
          <Image
            className="w-8 rounded-lg"
            width={1000}
            height={1000}
            src={data?.organization?.icon}
            alt={data?.organization?.name}
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start gap-1">
          <h3 className="text-neutral-600 dark:text-neutral-200 cutoff-text cutoff-text-1 font-bold text-sm">
            {data?.title}
          </h3>
          <p className="text-xs cutoff-text cutoff-text-1 text-neutral-400">
            {data?.organization?.name}, {format(date, "LLLL d, yyyy")}
          </p>
          <div className="justify-center hidden sm:flex overflow-hidden gap-2 mt-2 items-center">
            {data?.expertise?.map((item: string, index: number) => {
              return (
                <div
                  className="text-xs gap-2 dark:bg-neutral-800 bg-neutral-200 text-neutral-400 px-2 py-1 rounded-md"
                  key={index}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
}
