import connectToDatabase from "@/libs/mongodb";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  const {title, description, content, author, readTime, categories} = await req.json()
  const createdAt = Date.now()
  const updatedAt = ""
  await connectToDatabase();
  await Blog.create({title, description, content, author, readTime, categories, createdAt, updatedAt})
  return NextResponse.json({message: "Blog Created"}, {status: 201})
}

export async function GET() {
  await connectToDatabase();
  const blogs = await Blog.find();
  return NextResponse.json({ blogs })
}
