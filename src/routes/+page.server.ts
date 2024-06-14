import { prisma } from '$lib/server/db';
import type { RequestEvent } from './$types';

export const load = async ({ url }) => {

	const users = await prisma.user.findMany();
	return { users, pahtname: url.pathname };
};


