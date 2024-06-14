import { prisma } from "$lib/server/db"

export const load = async () => {
  const workSpaces = await prisma.workSpace.findMany({
    select: {
      members: true
    }
  })
  return { workSpaces }
}
