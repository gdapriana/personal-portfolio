import ImageProfile from "@/assets/images/apriana.png";
import Image from "next/image";
import { parseISO, format } from "date-fns";

export default function BlogOwner({ data }: { data: any }) {
  const date = parseISO(data.createdAt);
  console.log(`b ${date}`);
  return (
    <div className="w-full dark:border-neutral-800 py-4 border-y flex justify-between items-center">
      <div className="flex justify-start items-center gap-2">
        <div className="w-8 grayscale rounded-full overflow-hidden aspect-square">
          <Image src={ImageProfile} alt="profile" />
        </div>
        <p className="text-neutral-400 text-sm">
          Created by{" "}
          <span className="font-bold text-neutral-600">{data.author}</span>
        </p>
      </div>
      <div className="">
        <p className="text-neutral-400 text-sm">
          Published on{" "}
          <span className="font-bold text-neutral-600">{data.createdAt}</span>
        </p>
      </div>
    </div>
  );
}
