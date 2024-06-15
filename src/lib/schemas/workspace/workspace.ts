import { z } from "zod";

export const workspaceSchema = z.object({
  id: z.string(),
  name: z.string(),
  active: z.boolean(),
  memberIds: z.array(z.string()),
})

export type WorkSpaceSchema = typeof workspaceSchema


