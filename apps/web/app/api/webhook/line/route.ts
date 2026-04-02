/**
 * [API ROUTE]: LINE_WEBHOOK_ORCHESTRATOR v1.1.0
 * [STRATEGY]: AI-Native Auto Reply | Comprehensive Number Menu | Clean Architecture
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { messagingApi } from "@line/bot-sdk";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LINE_RESPONSES } from "@/constants/line-menu";

const { MessagingApiClient } = messagingApi;

// [SECURITY]: ดึง Token จาก Environment Variables
const client = new MessagingApiClient({
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN || "",
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const events = body.events;

    for (const event of events) {
      if (event.type === "message" && event.message.type === "text") {
        const userMessage = event.message.text;
        const replyToken = event.replyToken;

        // [LOGIC]: ประมวลผลคำตอบตาม Interactive Number Menu
        const responseMessage = await generateComprehensiveResponse(userMessage);

        await client.replyMessage({
          replyToken: replyToken,
          messages: [{ type: "text", text: responseMessage }],
        });
      }
    }

    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("❌ LINE Webhook Error:", error);
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}

/**
 * [AI_LOGIC]: ระบบคัดกรองตัวเลขและหัวข้อคำถาม (Comprehensive Engine)
 */
async function generateComprehensiveResponse(message: string): Promise<string> {
  const input = message.trim();

  // --- 1. Main Activation ---
  if (["0", "เมนู", "เริ่ม", "เริ่มต้น", "hi", "hello", "สวัสดี"].includes(input.toLowerCase())) {
    return LINE_RESPONSES.MAIN_MENU;
  }

  // --- 2. Comprehensive Number Navigation ---
  switch (input) {
    case "1":
      return LINE_RESPONSES.SERVICES;
    case "2":
      return LINE_RESPONSES.SEO_GEO;
    case "3":
      return LINE_RESPONSES.PRICING;
    case "4":
      return LINE_RESPONSES.PORTFOLIO;
    case "5":
      return LINE_RESPONSES.WHY_US;
    case "6":
      return LINE_RESPONSES.AREAS;
    case "7":
      return LINE_RESPONSES.WORKFLOW;
    case "8":
      return LINE_RESPONSES.CONTACT;

    default:
      // [SMART_SEARCH]: ตรวจจับคำสำคัญในประโยค
      if (input.includes("ราคา") || input.includes("กี่บาท")) return LINE_RESPONSES.PRICING;
      if (input.includes("ทำอะไร") || input.includes("บริการ")) return LINE_RESPONSES.SERVICES;
      if (input.includes("ผลงาน") || input.includes("ตัวอย่าง")) return LINE_RESPONSES.PORTFOLIO;
      if (input.includes("ติดต่อ") || input.includes("เบอร์")) return LINE_RESPONSES.CONTACT;

      return LINE_RESPONSES.FALLBACK;
  }
}
