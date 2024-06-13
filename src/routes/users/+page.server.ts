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

  transformedUsers.map((user) => {
    console.log(JSON.stringify(user.workSpaces))
  });

  return { users: transformedUsers };
};
