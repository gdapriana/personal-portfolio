import { ListBulletIcon, Square2StackIcon } from "@heroicons/react/24/outline";

export default function ViewButton ({ view, setView }: { view: string; setView: any }) {
  return (
    <div className="w-full flex justify-end my-4 items-center gap-2">
      <p className="text-sm text-neutral-400">Change View</p>
      <div
        onClick={() => setView("card")}
        className={`${
          view === "card" ? "bg-neutral-100" : ""
        } border p-1 rounded-md text-neutral-600 dark:border-neutral-800 cursor-pointer dark:bg-neutral-800`}
      >
        <Square2StackIcon className="w-5" />
      </div>

      <div
        onClick={() => setView("list")}
        className={`${
          view === "list" ? "bg-neutral-100" : ""
        } border dark:border-neutral-800 p-1 rounded-md text-neutral-600 cursor-pointer`}
      >
        <ListBulletIcon className="w-5" />
      </div>
    </div>
  );
};
