import { prisma } from '$lib/server/db';
import type { RequestEvent } from './$types';

export const load = async () => {
  const users = await prisma.user.findMany();
  const workSpaces = await prisma.workSpace.findMany();
  return { users, workSpaces };
};

