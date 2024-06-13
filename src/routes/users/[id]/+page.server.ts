import { prisma } from "$lib/server/db"
import { error } from "@sveltejs/kit";


import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id
    }
  })

  error(404, 'Not found');
};


