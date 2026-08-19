import fs from "fs/promises";
import path from "path";

export interface MissionRequest {
  id: string;
  name: string;
  urls: string[];
  objective: string;
  maxConcurrency?: number;
}

export interface MissionResult {
  missionId: string;
  status: "completed" | "failed";
  itemsExtracted: number;
  durationMs: number;
  results: Array<{
    url: string;
    success: boolean;
    title?: string;
    techDetected?: string[];
    contentSnippet?: string;
    error?: string;
  }>;
}

export class ManusCoreEngine {
  private memoryStore: Map<string, any> = new Map();

  async executeMission(req: MissionRequest): Promise<MissionResult> {
    const startTime = Date.now();
    const results = [];
    let itemsExtracted = 0;

    console.log(`[ManusCoreEngine] Starting mission ${req.id}: ${req.name}`);

    for (const targetUrl of req.urls) {
      try {
        console.log(`[ManusCoreEngine] Fetching ${targetUrl}...`);
        const resp = await fetch(targetUrl, {
          headers: { "User-Agent": "ManusCoreEngine/1.0 (Autonomous Web Explorer)" },
          signal: AbortSignal.timeout(15000),
        });

        if (!resp.ok) {
          throw new Error(`HTTP status ${resp.status}`);
        }

        const html = await resp.text();
        
        // Real HTML parsing & tech detection
        const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
        const title = titleMatch ? titleMatch[1].trim() : "Untitled";

        const techDetected: string[] = [];
        if (html.includes("react") || html.includes("__NEXT_DATA__")) techDetected.push("React / Next.js");
        if (html.includes("vue") || html.includes("__VUE__")) techDetected.push("Vue.js");
        if (html.includes("wp-content") || html.includes("wordpress")) techDetected.push("WordPress");
        if (html.includes("tailwind") || html.includes("tailwindcss")) techDetected.push("Tailwind CSS");
        if (html.includes("shopify")) techDetected.push("Shopify");
        if (techDetected.length === 0) techDetected.push("Standard HTML / Web Stack");

        // Snippet extraction
        const cleanText = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
                              .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
                              .replace(/<[^>]+>/g, " ")
                              .replace(/\s+/g, " ")
                              .trim()
                              .slice(0, 300);

        results.push({
          url: targetUrl,
          success: true,
          title,
          techDetected,
          contentSnippet: cleanText,
        });

        itemsExtracted++;
      } catch (err: any) {
        console.error(`[ManusCoreEngine] Error visiting ${targetUrl}:`, err.message);
        results.push({
          url: targetUrl,
          success: false,
          error: err.message,
        });
      }
    }

    const durationMs = Date.now() - startTime;
    const missionResult: MissionResult = {
      missionId: req.id,
      status: "completed",
      itemsExtracted,
      durationMs,
      results,
    };

    // Store in memory & artifacts
    this.memoryStore.set(req.id, missionResult);
    const artifactsDir = path.resolve(process.cwd(), "artifacts");
    await fs.mkdir(artifactsDir, { recursive: true });
    await fs.writeFile(
      path.join(artifactsDir, `mission_${req.id}.json`),
      JSON.stringify(missionResult, null, 2),
      "utf-8"
    );

    return missionResult;
  }

  getMissionResult(id: string): MissionResult | undefined {
    return this.memoryStore.get(id);
  }
}

export const globalEngine = new ManusCoreEngine();
