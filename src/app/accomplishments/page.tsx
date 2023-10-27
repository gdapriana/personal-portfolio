import Header from "@/components/globals/Header";

const metadata: { title: string; subtitle: string } = {
  title: "Accomplishments",
  subtitle:
    "Welcome to my Accomplishments Page, where i proudly showcase a collection of significant milestones and achievements in my life",
};

export default function Accomplishments() {
  return <Header metadata={metadata} />;
}
