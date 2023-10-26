import Header from "@/components/globals/Header";
import Divider from "@/components/globals/Divider";
import EducationSection from "@/components/educations/EducationSection";

const metadata: any = {
  title: "Educations",
  subtitle:
    "A place to share my educational journey, including my learnings, insights, and experiences.",
};

export default function Educations() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center overflow-hidden">
      <Header metadata={metadata} />
      <Divider />
      <EducationSection />
    </div>
  );
}
