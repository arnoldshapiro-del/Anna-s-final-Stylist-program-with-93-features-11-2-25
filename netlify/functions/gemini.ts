import type { Handler } from "@netlify/functions";
import { GoogleGenerativeAI } from "@google/genai";

const API_KEY = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
const MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";

export const handler: Handler = async (event) => {
  try {
    if (!API_KEY) throw new Error("Missing GEMINI_API_KEY");
    const body = event.body ? JSON.parse(event.body) : {};
    const prompt = body.prompt ?? "ping";

    const genAI = new GoogleGenerativeAI({ apiKey: API_KEY });
    const model = genAI.getGenerativeModel({ model: MODEL });
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return { statusCode: 200, body: JSON.stringify({ text }) };
  } catch (err: any) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message || "Gemini error" }) };
  }
};
