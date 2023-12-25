"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {motion as m, stagger} from "framer-motion"

 const metadata = {
  aboutText: "I am <b>I Komang Gede Apriana</b>, an active student of Informatics Department class of 2021, <b>Udayana University</b>. I am a dedicated and experienced Web Developer (Fullstack Developer) with a strong interest in Machine Learning. Have in-depth knowledge and strong skills in UI/UX Designer and Data Analyst."
 }

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
        <p dangerouslySetInnerHTML={{__html: metadata.aboutText}}></p>
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
                    key={index}
                    className="p-2 transition-all grayscale hover:grayscale-0 duration-300"
                    href={item.link}
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
