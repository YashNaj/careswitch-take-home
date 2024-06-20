<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import * as Dialog from '$lib/components/ui/dialog';

	import { Input } from '$lib/components/ui/input';
	import {
		type WorkSpaceDeleteSchema,
		workSpaceIdSchema
	} from '$lib/schemas/workspace/workspaceId';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data: SuperValidated<Infer<WorkSpaceDeleteSchema>>;

	const form = superForm(data, {
		validators: zodClient(workSpaceIdSchema)
	});

	const { form: formData, enhance } = form;

	export let id: string;
</script>

<Dialog.Root>
	<Dialog.Trigger
		class="0 flex h-10 w-full items-center justify-center  rounded-md border bg-primary-careRed py-3 text-sm font-bold text-white"
		>Delete this Workspace</Dialog.Trigger
	>
	<Dialog.Content class="flex h-auto w-80 max-w-md flex-col justify-between rounded-md md:h-40">
		<Dialog.Header>
			<Dialog.Title>Delete this Workspace?</Dialog.Title>
			<Dialog.Description>
				This action is not reversible
				<form
					method="POST"
					action="?/delete"
					class="flex h-full w-full flex-col items-center justify-end"
					use:enhance
				>
					<input hidden name="id" bind:value={id} />
					<Form.Button class="bg-primary-careRed font-bold text-white md:w-full">Delete</Form.Button
					>
				</form>
			</Dialog.Description>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>
