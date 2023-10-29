import Header from "@/components/dashboard/Header";
import Divider from "@/components/globals/Divider";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center overflow-hidden">
      <Header />
      <Divider />
    </div>
  );
}
