import { parseISO, format } from "date-fns";

export function EducationCard({
  data,
}: {
  data: { title: string; date: string; description: string };
}) {
  const date = parseISO(data?.date);
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-neutral-800 dark:bg-neutral-800"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {format(date, "LLLL d, yyyy")}
      </time>
      <h3 className="text-lg font-semibold text-neutral-600 dark:text-neutral-200">
        {data?.title}
      </h3>
      <p className="mb-4 text-base font-normal text-neutral-400">
        {data?.description}
      </p>
    </li>
  );
}
