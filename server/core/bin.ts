#!/usr/bin/env node
import { globalEngine } from "./engine.js";

const args = process.argv.slice(2);
const command = args[0];

async function main() {
  if (!command || command === "help") {
    console.log("==================================================");
    console.log("MANUS CORE ENGINE — CLI UTILITY");
    console.log("==================================================");
    console.log("Usage:");
    console.log("  npx tsx server/core/bin.ts mission run <url1> [url2] ...");
    console.log("  npx tsx server/core/bin.ts mission status <id>");
    console.log("==================================================");
    return;
  }

  if (command === "mission") {
    const subAction = args[1];
    if (subAction === "run") {
      const urls = args.slice(2);
      if (urls.length === 0) {
        console.error("Error: Please provide at least one target URL.");
        process.exit(1);
      }

      const missionId = `mission_${Date.now()}`;
      console.log(`[CLI] Launching autonomous mission ${missionId} on ${urls.length} target(s)...`);
      const result = await globalEngine.executeMission({
        id: missionId,
        name: "CLI Autonomous Extraction Mission",
        urls,
        objective: "Extract real content, titles and detect tech stack.",
      });

      console.log(JSON.stringify(result, null, 2));
    } else if (subAction === "status") {
      const id = args[2];
      if (!id) {
        console.error("Error: Please provide a mission ID.");
        process.exit(1);
      }
      const res = globalEngine.getMissionResult(id);
      if (!res) {
        console.error(`Error: Mission ${id} not found in memory.`);
        process.exit(1);
      }
      console.log(JSON.stringify(res, null, 2));
    } else {
      console.error(`Unknown mission sub-action: ${subAction}`);
    }
  } else {
    console.error(`Unknown command: ${command}`);
  }
}

main().catch((err) => {
  console.error("[CLI Error]", err);
  process.exit(1);
});
