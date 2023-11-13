"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_LINK}/api/skills`)
      .then((response) => setSkills(response.data.skills))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-full my-8 grid gap-8 grid-cols-1 sm:grid-cols-4 sm:grid-auto-rows">
      <div className="text-lg text-neutral-600 dark:text-neutral-200 font-bold">
        About Me
      </div>
      <div className="sm:col-span-3 text-neutral-400 text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quo
        velit. Quia beatae optio non perferendis, rem ipsam quisquam maxime hic
        voluptas at nam reiciendis quis ex ullam veritatis rerum magni. Eum,
        odio, suscipit doloremque nulla quia porro ea dolorum obcaecati sapiente
        magni repellendus at aspernatur impedit neque, numquam asperiores quos.
        Dignissimos, illum commodi veritatis suscipit tenetur
      </div>
      <div className="text-lg text-neutral-600 font-bold dark:text-neutral-200">
        Skills
      </div>
      <div className="sm:col-span-3 flex flex-wrap gap-2 text-neutral-400 text-base">
        {skills.length === 0
          ? "Loading..."
          : skills.map(
              (
                item: { link: string; _id: string; image: string },
                index: number,
              ) => {
                return (
                  <Link
                    className="hover:border-b p-2 transition-all duration-300 hover:scale-105"
                    href={item.link}
                    key={item._id}
                  >
                    <Image
                      className="w-12"
                      width={100}
                      height={100}
                      src={item.image}
                      alt=""
                    />
                  </Link>
                );
              },
            )}
      </div>
    </div>
  );
};

export default About;
