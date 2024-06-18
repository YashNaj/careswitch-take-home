import type { WorkSpace } from "@prisma/client";
import { prisma } from "$lib/server/db";

// an attempt at a reactive rune paritally inspired by TanStack, since im not allowed to use that library according to directions. 


export async function getWorkSpace(id: string) {
  return await prisma.workSpace.findUnique({
    where: {
      id
    },
    include: {
      members: true
    }
  })
}




export async function workSpaceRune(id: string) {
  let workSpace: WorkSpace = await getWorkSpace(id)

  return {
    get workspace() { return workSpace },
    refetch: async () => workSpace = await getWorkSpace(id)
  }
}
