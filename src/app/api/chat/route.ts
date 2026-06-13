import { NextRequest, NextResponse } from "next/server";
import { askPoojaAI } from "@/lib/gemini";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required and must be a string." },
        { status: 400 }
      );
    }

    const reply = await askPoojaAI(message);
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Error in chat route:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
