import { publicProcedure, router } from "../_core/trpc.js";
import { z } from "zod";
import { globalEngine } from "../core/engine.js";

export const missionsRouter = router({
  run: publicProcedure
    .input(
      z.object({
        name: z.string(),
        urls: z.array(z.string().url()),
        objective: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const missionId = `mission_${Date.now()}`;
      const result = await globalEngine.executeMission({
        id: missionId,
        name: input.name,
        urls: input.urls,
        objective: input.objective,
      });
      return result;
    }),

  get: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => {
      const res = globalEngine.getMissionResult(input.id);
      if (!res) {
        throw new Error("Mission not found");
      }
      return res;
    }),
});
