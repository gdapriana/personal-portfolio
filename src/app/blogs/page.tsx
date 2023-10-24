import Header from "@/components/globals/Header";
import Divider from "@/components/globals/Divider";

const metadata: any = {
  title: "Blogs",
  subtitle: "Here I store my thoughts and ideas on a variety of topics, from technology and current events to personal experiences and reflections. I hope you enjoy my writing!",
};

export default function Blog() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center overflow-hidden">
      <Header metadata={metadata} />
      <Divider />
    </div>
  )
}