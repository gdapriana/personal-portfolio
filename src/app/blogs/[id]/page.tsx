"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Simulate } from "react-dom/test-utils";
import BlogHeader from "@/components/blogs/blog/BlogHeader";
import BlogOwner from "@/components/blogs/blog/BlogOwner";
import BlogContent from "@/components/blogs/blog/BlogContent";

export default function Blog({ params }: { params: any }) {
  const [blog, setBlog] = useState({
    cover: "",
  });
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/blogs/${params.id}`)
      .then((response) => setBlog(response.data.blog))
      .catch((error) => console.log(error));
  }, [params.id]);

  return (
    <div className="w-full flex flex-col h-full bg-red-500 overflow-scroll justify-start items-center">
      <div
        className="w-full h-40 lg:h-80 bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${blog?.cover})` }}
      ></div>

      <div className="w-full flex flex-col">
        <BlogHeader data={blog} />
        <BlogOwner data={blog} />
        <BlogContent data={blog} />
      </div>
    </div>
  );
}
