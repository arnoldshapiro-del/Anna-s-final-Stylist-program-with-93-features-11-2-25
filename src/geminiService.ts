// src/geminiService.ts
// Purpose: keep the exact function names your App.tsx imports,
// and make everything work even if the UI passes an empty or undefined "prompt".
// We fall back to a sensible default user profile & instructions.

import { generateText } from "./lib/geminiClient";

// A safe, generic starter profile used when the UI gives us nothing.
const DEFAULT_PROFILE = `
USER PROFILE (DEFAULT FALLBACK)
- Style: classic + modern casual (clean lines, neutral core with 1 accent color)
- Use case: everyday + smart-casual; occasional work meetings; date night 1x/week
- Climate: mixed seasons (cool winters, warm summers); indoor AC common
- Fit prefs: comfortable, tailored-not-tight; mid-rise; avoid itchy fabrics
- Budget per item: $50–$150 (flex to $250 for shoes/jackets)
- Colors to favor: navy, charcoal, off-white, olive; accent: burgundy
- Avoid: neon, heavy logos, overly distressed denim
- Sizes (approx): tops M, bottoms 32/32, shoes US 10 (adjust as needed)
- Closet highlights: dark denim, chinos, OCBD, crew tees, merino sweater, white sneakers, casual boots, unstructured blazer
- Sustainability: prefer durable basics over micro-trends
`;

// A short "system" instruction we’ll prepend so responses are structured and useful.
const BASE_INSTRUCTIONS = `
You are a fashion assistant. Return clear, actionable results with short bullets.
For lists, use 3–7 items. Include rationale when helpful. Keep output concise.
When recommending products, describe what to look for (cuts/fabrics/features) instead of specific affiliate links.
`;

// Helper: normalize any input; if it's blank/undefined, use our default profile.
function resolvePrompt(raw: unknown): string {
  const s = (typeof raw === "string" ? raw : "").trim();
  return s.length ? s : DEFAULT_PROFILE;
}

// Single call that every feature uses.
async function ask(raw: unknown, featureLabel: string): Promise<string> {
  const prompt = resolvePrompt(raw);
  const full = `${BASE_INSTRUCTIONS}
TASK: ${featureLabel}
INPUT:
${prompt}
`;
  return generateText(full);
}

// -------------- Exported functions (names must match App.tsx) --------------
// Each function accepts { prompt: string } but we’ll survive if prompt is missing.

export async function generateOutfit({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Create a complete outfit plan with reasoning. Include top, bottom, footwear, outer layer (if relevant), and 1–2 accessories.");
}

export async function analyzeStyle({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Analyze current style. Give 3 strengths, 3 opportunities, and 5 quick upgrades.");
}

export async function suggestColorPalette({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Suggest a cohesive color palette (core + accents). Include 3 sample outfits using that palette.");
}

export async function analyzeTrends({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Summarize relevant trends that fit the profile. For each, describe how to wear it minimally.");
}

export async function optimizeWardrobe({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Wardrobe optimization: Keep / Tailor / Donate / Acquire lists with reasons. Max 7 items per list.");
}

export async function personalShopping({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Personal shopping plan by priorities. For each category list fit, fabric, and what to avoid.");
}

export async function dressForOccasion({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Dress for an occasion. Give 2 outfit options (Option A conservative, Option B stylish).");
}

export async function mixAndMatch({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Mix-and-match matrix: 5 tops × 3 bottoms × 2 shoes → list 6 strong combos with why they work.");
}

export async function suggestAccessories({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Accessory capsule (watch, belt, bag, scarf/hat, sunglasses). 1–2 options each with quick rationale.");
}

export async function styleForBodyType({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Body-type-aware guidance: best silhouettes, rises, leg openings, jacket lengths. Include 3 fit checks.");
}

export async function suggestSustainableAlternatives({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Sustainable swaps: fabrics to prefer/avoid, durability checks, care tips. List 5 long-life buys.");
}

export async function vintageStyleGuide({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Vintage style guide: key eras that fit, 5 staple pieces, and how to modernize each.");
}

export async function matchCelebrityStyle({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Translate a celebrity look to accessible options. Identify the key 3 elements and budget alternates.");
}

export async function planSeasonalWardrobe({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Seasonal capsule: 12 pieces max. Show 8 outfits that cover weekday/weekend/evening.");
}

export async function analyzeFashionWeek({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Fashion Week insights: 4 trends that align with the profile; 1 practical way to try each.");
}

export async function budgetStyleAdvice({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Budget strategy: where to spend vs save (5/5). Include a 3-month buy schedule.");
}

export async function buildWorkWardrobe({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Work wardrobe plan by dress code. Give essentials, rotation plan, and quick grooming checklist.");
}

export async function packForTravel({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Travel packing list (carry-on). List items and show 6 outfits covering all activities.");
}

export async function styleSpecialOccasion({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Special-occasion outfit with accessory map and optional backup plan.");
}

export async function createCapsuleWardrobe({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Design a capsule wardrobe (max 20 items) with roles and 10 outfit examples.");
}

export async function analyzeBrandAffinity({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Brand affinity: 6 brands that match style/budget with one-liner why each fits.");
}

export async function analyzePatternMix({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Pattern mixing: 5 pairings, scale/contrast rules, and 3 safe starter combos.");
}

export async function estimateWardrobeCarbonFootprint({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Estimate wardrobe footprint at a high level; give 5 reduction tactics with impact order.");
}

export async function findCelebrityStyleTwin({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Celebrity style twins and what to borrow (silhouette, palette, signature piece).");
}

export async function findThriftedAlternatives({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Thrift search strategy: keywords, fabrics to target, quick condition checks, tailoring tips.");
}

export async function forecastEventStyle({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Event style forecast (season/location). 2 looks and weather/venue adjustments.");
}

export async function generateFashionIllustration({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Describe a fashion illustration prompt (pose, garment drape, fabric texture, lighting, background).");
}

export async function generatePlaylistForOutfit({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Music playlist (12–15 tracks) matching outfit mood; include 3 mood tags.");
}

export async function generateSeamlessPattern({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Seamless pattern brief: motif, repeat type, scale, colorway, and 3 use-cases.");
}

export async function predictFitForProduct({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Fit & size recommendation with the 3 most important measurements/returns risks.");
}

export async function organizeCloset({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Closet organization (zones, hang vs fold, seasonal box, rotate cadence). Include 5-minute resets.");
}

export async function rotateCloset({ prompt }: { prompt?: string }): Promise<string> {
  return ask(prompt, "Closet rotation schedule by season and wear frequency; list triggers to rotate early.");
}
