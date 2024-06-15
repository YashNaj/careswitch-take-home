import { prisma } from "$lib/server/db"
import { error } from "@sveltejs/kit";


import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {

  let user;
  try {
    user = await prisma.user.findUnique({
      where: {
        id: params.id
      }
    })

  } catch (error) {
    console.log(error)
  } finally {
    return { user }
  }
};


