import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const inquirySchema = z.object({ name: z.string().trim().min(2).max(80), phone: z.string().trim().min(8).max(25), email: z.string().email().optional().or(z.literal("")), message: z.string().trim().min(5).max(1000), propertyId: z.string().optional() });

export async function POST(request: Request) {
  try {
    const body = inquirySchema.parse(await request.json());
    const inquiry = await prisma.inquiry.create({ data: { ...body, email: body.email || null } });
    return NextResponse.json({ id: inquiry.id }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) return NextResponse.json({ error: "Please check the details you entered." }, { status: 400 });
    console.error("Inquiry submission failed", error);
    return NextResponse.json({ error: "Unable to submit your inquiry at this time." }, { status: 500 });
  }
}
