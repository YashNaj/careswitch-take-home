import { z } from 'zod';
export const removeMember = z.object({
  members: z.array(z.string())
})


export type WorkSpaceRemoveMember = typeof removeMember
