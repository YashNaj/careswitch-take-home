<script lang="ts">
	import {
		workspaceSchema,
		type WorkSpaceUpdateSchema
	} from '$lib/schemas/workspace/workspaceUpdate';

	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';

	import { Switch } from '$lib/components/ui/switch';

	import { type SuperValidated, type Infer, superForm, actionResult } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	export let data: SuperValidated<Infer<WorkSpaceUpdateSchema>>;

	const form = superForm(data, {
		validators: zodClient(workspaceSchema),
		invalidateAll: 'force',
		delayMs: 500,
		timeoutMs: 2000
	});

	export const { form: formData, enhance, delayed } = form;
</script>

<form action="?/update" method="POST" use:enhance>
	<!-- the form is populate by server -->
	<!-- server population ensures id is always correct-->
	<input name="id" hidden bind:value={$formData.id} />
	<Form.Field class="max-w-sm" {form} name="name">
		<Form.Control let:attrs>
			<Form.Label>Name</Form.Label>
			<Input {...attrs} bind:value={$formData.name} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field class="max-w-sm" {form} name="active">
		<Form.Control let:attrs>
			<div class="space-y-0.5">
				<Form.Label>Active</Form.Label>
				<Form.Description>Designate the current status of this workspace.</Form.Description>
			</div>
			<Switch includeInput {...attrs} bind:checked={$formData.active} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button data-sveltekit-reload class="flex w-full justify-center ">
		<div class="relative h-full w-full">
			{#if $delayed}
				<div class="absolute flex h-full w-full items-center justify-center">Loading</div>
			{:else}
				<div class="absolute flex h-full w-full items-center justify-center">Update</div>
			{/if}
		</div>
	</Form.Button>
</form>
