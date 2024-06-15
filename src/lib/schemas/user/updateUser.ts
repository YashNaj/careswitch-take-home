import { z } from "zod"

export const updateUserSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  email: z.string().email().optional(),
  role: z.string().optional(),
  region: z.string().optional(),
  acitve: z.boolean().optional(),
  workSpaceIds: z.array(z.string()).optional()
})

export type UserSchema = typeof updateUserSchema;

