import connectToDatabase from "@/libs/mongodb";
import Accomplishment from "@/models/accomplishment";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  const {
    title,
    organization,
    publicationDate,
    expirationDate,
    credentialId,
    credentialUrl,
    cover,
    expertise,
  } = await req.json();
  const updatedAt = Date.now();
  const createdAt = Date.now();
  await connectToDatabase();
  Accomplishment.create({
    title,
    organization,
    publicationDate,
    expirationDate,
    credentialId,
    credentialUrl,
    expertise,
    cover,
    createdAt,
    updatedAt,
  });

  return NextResponse.json(
    { message: "Accomplishment Created" },
    { status: 201 },
  );
}

export async function GET() {
  await connectToDatabase();
  const accomplishments = await Accomplishment.find();
  return NextResponse.json({ accomplishments });
}
