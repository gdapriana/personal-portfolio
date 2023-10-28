import { parseISO, format } from "date-fns";

export function EducationCard({
  data,
}: {
  data: {
    title: string;
    date: string;
    description: string;
    cover: string;
    inOut: string;
    specialists: string[];
  };
}) {
  const date = parseISO(data?.date);
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-neutral-800 dark:bg-neutral-800"></div>
      <time className="mb-1 text-xs md:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {format(date, "LLLL d, yyyy")}
      </time>
      <div className="w-full flex justify-center gap-12 items-center">
        <div className="w-full flex-1">
          <h3 className="text-base md:text-lg font-semibold text-neutral-600 dark:text-neutral-200">
            {data?.title}{" "}
            <span className="text-neutral-400 dark:text-neutral-400 dark:bg-neutral-800 text-sm bg-neutral-200 px-2 py-1 rounded-lg">
              {data?.inOut}
            </span>
          </h3>
          <p className="mb-4 text-xs font-normal md:text-sm text-neutral-400">
            {data?.description}
          </p>
          <div className="mt-auto flex justify-start items-center gap-2 w-full">
            {data?.specialists?.map((item, index) => {
              return (
                <span
                  key={index}
                  className="bg-neutral-200 text-neutral-400 px-2 py-1 rounded-lg text-xs dark:bg-neutral-800"
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>
        <div
          className="w-56 hidden lg:flex aspect-square rounded-lg grayscale md:aspect-video bg-cover"
          style={{ backgroundImage: `url(${data?.cover})` }}
        ></div>
      </div>
    </li>
  );
}
