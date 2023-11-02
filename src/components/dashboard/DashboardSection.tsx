export default function DashboardSection() {
  return (
    <div className="w-full overflow-auto hide-scrollbar flex-1 flex flex-col justify-start gap-4 items-center">
      <div className="w-full my-8 grid gap-8 grid-cols-1 sm:grid-cols-4 sm:grid-rows-2">
        <div className="text-lg text-neutral-600 font-bold">About Me</div>
        <div className="sm:col-span-3 text-neutral-400 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quo
          velit. Quia beatae optio non perferendis, rem ipsam quisquam maxime
          hic voluptas at nam reiciendis quis ex ullam veritatis rerum magni.
          Eum, odio, suscipit doloremque nulla quia porro ea dolorum obcaecati
          sapiente magni repellendus at aspernatur impedit neque, numquam
          asperiores quos. Dignissimos, illum commodi veritatis suscipit tenetur
        </div>
        <div className="text-lg text-neutral-600 font-bold">Skills</div>
        <div className="sm:col-span-3 text-neutral-400 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quo
          velit. Quia beatae optio non perferendis, rem ipsam quisquam maxime
          hic voluptas at nam reiciendis quis ex ullam veritatis rerum magni.
          Eum, odio, suscipit doloremque nulla quia porro ea dolorum obcaecati
          sapiente magni repellendus at aspernatur impedit neque, numquam
          asperiores quos. Dignissimos, illum commodi veritatis suscipit tenetur
        </div>
      </div>
    </div>
  );
}
