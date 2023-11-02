import connectToDatabase from "@/libs/mongodb";
import Skill from "@/models/skills";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();
  const skills = await Skill.find();
  return NextResponse.json({ skills });
}

export async function POST(request: NextRequest) {
  const { title, image, link } = await request.json();
  await connectToDatabase();
  await Skill.create({ title, image, link });
  return NextResponse.json({ message: "Skill Created" }, { status: 201 });
}
