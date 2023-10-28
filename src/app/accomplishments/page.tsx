import AccomplishmentSection from "@/components/accomplishments/AccomplishmentSection";
import Divider from "@/components/globals/Divider";
import Header from "@/components/globals/Header";

const metadata: { title: string; subtitle: string } = {
  title: "Accomplishments",
  subtitle:
    "Welcome to my Accomplishments Page, where i proudly showcase a collection of significant milestones and achievements in my life",
};

export default function Accomplishments() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center overflow-hidden">
      <Header metadata={metadata} />
      <Divider />
      <AccomplishmentSection />
    </div>
  );
}
