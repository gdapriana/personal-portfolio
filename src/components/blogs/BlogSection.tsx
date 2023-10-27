"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingAnimation from "@/components/globals/LoadingAnimation";
import BlogCard from "@/components/blogs/BlogCard";
import { parseISO, format } from "date-fns";

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.NEXTAUTH_URL}/api/blogs`)
      .then((response) => setBlogs(response.data.blogs))
      .catch((error) => console.log(error));
  }, []);

  if (blogs.length !== 0) {
    return (
      <div className="w-full overflow-auto hide-scrollbar flex-1 flex flex-col justify-start gap-4 items-center">
        {blogs.map((item: any) => (
          <BlogCard key={item._id} data={item} />
        ))}
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
