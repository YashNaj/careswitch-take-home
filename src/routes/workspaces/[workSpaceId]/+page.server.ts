import { prisma } from "$lib/server/db";
import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { workspaceSchema } from "$lib/schemas/workspace/workspaceUpdate";
import { fail } from "assert";
import { goto, invalidateAll } from "$app/navigation";
import type { WorkSpace } from "@prisma/client";


export const load: PageServerLoad = async ({ params }) => {
  let workSpace: WorkSpace | null = null;

  if (!params.workSpaceId) {
    console.error("No ID provided in parameters");
    return { workSpace: null };
  }

  try {
    workSpace = await prisma.workSpace.findUnique({
      where: {
        id: params.workSpaceId,
      },
      include: {
        members: true
      }
    });

    if (!workSpace) {
      console.error(`No WorkSpace found with ID: ${params.workSpaceId}`);
    }
  } catch (error) {
    console.error("Error fetching WorkSpace:", error);
  } finally {
    return { id: params.workSpaceId, workSpace, workSpaceUpdateForm: await superValidate(workSpace, zod(workspaceSchema)) };
  }
};

export const actions: Actions = {
  //a general update area, all updates can go through here   
  update: async (event) => {
    console.log("THE FORM HIT THE UPDATE ACTION")
    const workSpaceUpdateForm = await superValidate(event, zod(workspaceSchema));

    if (!workSpaceUpdateForm.valid) {
      return fail(400, {
        workSpaceUpdateForm,
      });
    }

    try {
      await prisma.workSpace.update(
        {
          where: {
            id: workSpaceUpdateForm.data.id
          },
          data: {
            name: workSpaceUpdateForm.data.name,
            active: workSpaceUpdateForm.data.active
          },
        })

    } catch (error) {
      console.log(error)
      return fail(400, {
        workSpaceUpdateForm,
      });
    } finally {

      return { workSpaceUpdateForm }
    }
  },
  delete: async (event) => {

  },
  addMember: async () => {

  },
  removeMember: async () => {

  }
}



