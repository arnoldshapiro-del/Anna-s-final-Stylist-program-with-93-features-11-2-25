import { generateText } from "./lib/geminiClient";

// Minimal helper used by every feature
async function ask(prompt: string): Promise<string> {
  return generateText(prompt);
}

/**
 * Keep the exact function names your App.tsx expects.
 * Each function takes { prompt: string } and returns Promise<string>.
 * No other imports. No deprecated SDKs. All calls go through the Netlify function via generateText().
 */

// Outfit & styling core
export async function generateOutfit({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Create a complete outfit plan with reasoning.\nUser input: ${prompt}`);
}
export async function analyzeStyle({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Analyze this personal style and give clear tips.\nInput: ${prompt}`);
}
export async function suggestColorPalette({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Suggest a cohesive color palette and why.\nContext: ${prompt}`);
}
export async function analyzeTrends({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Summarize relevant fashion trends for this query.\nQuery: ${prompt}`);
}
export async function optimizeWardrobe({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Optimize wardrobe: keep, tailor, donate, buy list.\nWardrobe: ${prompt}`);
}
export async function personalShopping({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Personal shopping list with price tiers and sources.\nNeeds: ${prompt}`);
}
export async function dressForOccasion({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Outfit plan matched to occasion & weather.\nOccasion: ${prompt}`);
}
export async function mixAndMatch({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Mix-and-match combinations from items.\nItems: ${prompt}`);
}
export async function suggestAccessories({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Accessory recommendations and why they fit.\nContext: ${prompt}`);
}
export async function styleForBodyType({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Body-type-aware styling guidance.\nDetails: ${prompt}`);
}
export async function suggestSustainableAlternatives({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Sustainable alternatives and materials.\nRequest: ${prompt}`);
}
export async function vintageStyleGuide({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Vintage styling guide with eras and fits.\nFocus: ${prompt}`);
}
export async function matchCelebrityStyle({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Translate this celeb look to affordable options.\nLook: ${prompt}`);
}
export async function planSeasonalWardrobe({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Seasonal capsule plan with essentials.\nSeason/context: ${prompt}`);
}
export async function analyzeFashionWeek({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Key takeaways from relevant Fashion Week looks.\nFocus: ${prompt}`);
}
export async function budgetStyleAdvice({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Style strategy under a budget with priorities.\nBudget/context: ${prompt}`);
}
export async function buildWorkWardrobe({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Work wardrobe plan by role & dress code.\nDetails: ${prompt}`);
}
export async function packForTravel({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Travel packing list (weather, activities, re-wear plan).\nTrip: ${prompt}`);
}
export async function styleSpecialOccasion({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Special-occasion outfit with accessories.\nOccasion: ${prompt}`);
}
export async function createCapsuleWardrobe({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Capsule wardrobe (tops, bottoms, layers, shoes) with counts.\nContext: ${prompt}`);
}

// Analysis / pattern / footprint
export async function analyzeBrandAffinity({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Brands that fit this style & budget.\nProfile: ${prompt}`);
}
export async function analyzePatternMix({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Pattern-mixing guidance: what pairs well and why.\nItems: ${prompt}`);
}
export async function estimateWardrobeCarbonFootprint({ prompt }: { prompt: string }): Promise<string> {
  return ask(`High-level wardrobe carbon footprint estimate with suggestions.\nWardrobe: ${prompt}`);
}
export async function findCelebrityStyleTwin({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Celeb style twin ideas and what to copy.\nDetails: ${prompt}`);
}
export async function findThriftedAlternatives({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Thrift/secondhand alternatives with search terms.\nTargets: ${prompt}`);
}
export async function forecastEventStyle({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Forecast fitting styles for event/date & location.\nEvent: ${prompt}`);
}

// Creative / assets
export async function generateFashionIllustration({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Describe a fashion illustration to generate, including pose, fabric, and mood.\nBrief: ${prompt}`);
}
export async function generatePlaylistForOutfit({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Playlist that matches outfit vibe (10–15 tracks).\nVibe: ${prompt}`);
}
export async function generateSeamlessPattern({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Text description for a seamless repeatable pattern.\nTheme: ${prompt}`);
}

// Fit / product
export async function predictFitForProduct({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Fit prediction & size recommendation with rationale.\nInput: ${prompt}`);
}

// Closet ops
export async function organizeCloset({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Closet organization plan (zones, hang/fold, rotate).\nInventory: ${prompt}`);
}
export async function rotateCloset({ prompt }: { prompt: string }): Promise<string> {
  return ask(`Rotation schedule by season and wear frequency.\nDetails: ${prompt}`);
}
