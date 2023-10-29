"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Simulate } from "react-dom/test-utils";
import BlogHeader from "@/components/blogs/blog/BlogHeader";
import BlogOwner from "@/components/blogs/blog/BlogOwner";
import BlogContent from "@/components/blogs/blog/BlogContent";
import Divider from "@/components/globals/Divider";

export default function Blog({ params }: { params: any }) {
  const [blog, setBlog] = useState({
    cover: "",
  });
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_LINK}/api/blogs/${params.id}`)
      .then((response) => setBlog(response.data.blog))
      .catch((error) => console.log(error));
  }, [params.id]);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <div
        className="w-full h-40 lg:h-80 bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${blog?.cover})` }}
      ></div>

      <Divider />

      <div className="w-full flex flex-col flex-1 overflow-auto hide-scrollbar justify-start items-center">
        <BlogHeader data={blog} />
        <BlogContent data={blog} />
        <BlogOwner data={blog} />
      </div>
    </div>
  );
}
