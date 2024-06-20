import { z } from 'zod';


export const addMember = z.object({
  members: z.array(z.string())
})


export type WorkSpaceAddMember = typeof addMember;

