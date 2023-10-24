export default function BlogHeader({ data }: { data: any }) {
  return (
    <div className="w-full flex gap-4 flex-col justify-center my-8 items-start">
      <h1 className="text-2xl font-bold dark:text-neutral-200 text-neutral-600">
        {data.title}
      </h1>
      <p className="text-neutral-400">{data.description}</p>
      <div className="flex gap-2 my-4 justify-center hide-scrollbar items-center overflow-x-scroll">
        {data?.categories?.map((item: any, index: number) => (
          <div
            className="text-neutral-400 dark:bg-neutral-800 rounded-lg text-sm cutoff-text cutoff-text-1 whitespace-nowrap bg-neutral-200 py-2 px-4"
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
