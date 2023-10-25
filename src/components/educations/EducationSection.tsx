"use client";
import LoadingAnimation from "@/components/globals/LoadingAnimation";
import { useState } from "react";
import { EducationCard } from "@/components/educations/EducationCard";

export default function EducationSection() {
  const [educations, setEducation] = useState([1]);
  if (educations.length !== 0) {
    return (
      <div className="w-full overflow-auto hide-scrollbar flex-1 flex flex-col justify-start gap-4 items-center">
        <ol className="relative border-l lg:my-16 m-4 border-gray-200 dark:border-gray-700">
          <EducationCard />
          <EducationCard />
          <EducationCard />
          <EducationCard />
          <EducationCard />
          <EducationCard />
        </ol>
      </div>
    );
  } else {
    return (
      <div className="w-full flex justify-center items-center flex-1">
        <LoadingAnimation />
      </div>
    );
  }
}
