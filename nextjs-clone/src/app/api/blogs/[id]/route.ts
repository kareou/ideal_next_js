import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  console.log("Fetching blog post with ID:", id);

  const blog = await prisma.blog.findUnique({
    where: { id: Number(id) },
  });

  return NextResponse.json(blog);
}
