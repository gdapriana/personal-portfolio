import connectToDatabase from "@/libs/mongodb";
import Project from "@/models/project";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();
  const projects = await Project.find();
  return NextResponse.json({ projects })
}