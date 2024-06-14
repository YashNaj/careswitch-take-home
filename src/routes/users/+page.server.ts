import { prisma } from '$lib/server/db';

export const load = async () => {
  const users = await prisma.user.findMany({
    include: {
      workSpaces: {
        select: {
          name: true
        }
      }
    }
  });

  const transformedUsers = users.map((user) => ({
    ...user,
    workSpaces: user.workSpaces.map((workspace) => workspace.name)
  }));


  return { users: transformedUsers }
};
