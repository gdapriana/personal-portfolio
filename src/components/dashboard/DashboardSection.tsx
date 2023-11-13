import About from "@/components/dashboard/About";
import QuickLink from "@/components/dashboard/QuickLink";

export default function DashboardSection() {
  return (
    <div className="w-full overflow-auto hide-scrollbar flex-1 flex flex-col justify-start gap-4 items-center">
      <About />
      <QuickLink />
    </div>
  );
}
