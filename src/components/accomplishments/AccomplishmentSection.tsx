"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingAnimation from "@/components/globals/LoadingAnimation";
import AccomplishmentCard from "@/components/accomplishments/AccomplishmentCard";

export default function AccomplishmentSection() {
  const [accomplishments, setAccomplishment] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/accomplishments")
      .then((response) => setAccomplishment(response.data.accomplishments))
      .catch((error) => console.log(error));
  }, []);

  if (accomplishments.length !== 0) {
    return (
      <div className="w-full flex-1 hide-scrollbar py-8 overflow-auto auto-rows-max gap-4 grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {accomplishments.map((item: any) => (
          <AccomplishmentCard key={item?._id} data={item} />
        ))}
      </div>
    );
  }

  return (
    <div className="w-full flex flex-1 justify-center items-center">
      <LoadingAnimation />
    </div>
  );
}
