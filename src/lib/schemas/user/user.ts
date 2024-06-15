import { z } from "zod"

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  role: z.string(),
  region: z.string(),
  acitve: z.boolean(),
  workSpaceIds: z.array(z.string()).optional()
})

export type UserSchema = typeof userSchema;

