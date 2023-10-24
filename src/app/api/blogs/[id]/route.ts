import connectToDatabase from "@/libs/mongodb";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function GET(req: any, { params }: { params: any }) {
  const { id } = params;
  await connectToDatabase();
  const blog = await Blog.findOne({ _id: id });
  return NextResponse.json({ blog }, { status: 200 });
}
