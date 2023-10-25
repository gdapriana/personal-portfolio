import connectToDatabase from "@/libs/mongodb";
import Education from "@/models/education";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  const { title, description, location, date, categories } = await req.json();
  const createdAt = Date.now();
  const updatedAt = Date.now();
  await connectToDatabase();

  // prettier-ignore
  await Education.create({ title, description, location, date, categories, createdAt, updatedAt });

  // prettier-ignore
  return NextResponse.json(
    { message: { title, description, location, date, categories, createdAt, updatedAt }}, { status: 201 },
  );
}

export async function GET() {
  await connectToDatabase();
  const educations = await Education.find();
  return NextResponse.json({ educations }, { status: 200 });
}
