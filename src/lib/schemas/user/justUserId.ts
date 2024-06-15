import { z } from "zod";

export const userId = z.object({
  id: z.string(),
});

export type UserId = typeof userId;

