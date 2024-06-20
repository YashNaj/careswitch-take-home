import { prisma } from '$lib/server/db';

export const load = async () => {
  const users = await prisma.user.findMany({
    include: {
      workSpaces: {
        select: {
          name: true
        }
      },
      region: {
        select: {
          name: true
        }
      }
    }
  })

  const transformedUsers = users.map((user) => ({
    ...user,
    workSpaces: user.workSpaces.map((workspace) => workspace.name),
    //@ts-ignore
    region: user.region.name
  }));


  return { users: transformedUsers }
};
