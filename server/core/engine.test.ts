import { describe, it, expect } from "vitest";
import { ManusCoreEngine } from "./engine.js";

describe("ManusCoreEngine Autonomous Mission Tests", () => {
  it("should execute a real mission and return structured results", async () => {
    const engine = new ManusCoreEngine();
    const result = await engine.executeMission({
      id: "test_mission_unit",
      name: "Unit Test Mission",
      urls: ["https://example.com"],
      objective: "Test core extraction",
    });

    expect(result.missionId).toBe("test_mission_unit");
    expect(result.status).toBe("completed");
    expect(result.itemsExtracted).toBe(1);
    expect(result.results.length).toBe(1);
    expect(result.results[0].success).toBe(true);
    expect(result.results[0].title).toBe("Example Domain");
  });
});
