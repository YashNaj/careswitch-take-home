import { prisma } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {

	const users = await prisma.user.findMany();
	return { users, pahtname: url.pathname };
};


