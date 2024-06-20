import { z } from "zod";

export const workSpaceIdSchema = z.object({
  id: z.string()
})


export type WorkSpaceDeleteSchema = typeof workSpaceIdSchema;

