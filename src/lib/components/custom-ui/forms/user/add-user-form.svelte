<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import type { WorkSpace } from '@prisma/client';
	export let workSpaces: WorkSpace[];
</script>

<Sheet.Root>
	<Sheet.Trigger asChild let:builder>
		<Button builders={[builder]} class="rounded-medium" variant="ghost">+ Add More</Button>
	</Sheet.Trigger>
	<Sheet.Content class="z-[1000]" side="right">
		<Sheet.Header>
			<Sheet.Title>Add a new user</Sheet.Title>
			<Sheet.Description>
				Add a new user here. Designate privelages, then assign a workspace.
			</Sheet.Description>
		</Sheet.Header>
		<form action="/user/?add"></form>
		<div class="grid gap-4 py-4">
			<div class="grid grid-cols-4 items-center gap-4">
				<Label for="name" class="text-right">Name</Label>
				<Input id="name" value="Pedro Duarte" class="col-span-3" />
			</div>
			<div class="grid grid-cols-4 items-center gap-4">
				<Label for="username" class="text-right">Username</Label>
				<Input id="username" value="@peduarte" class="col-span-3" />
			</div>
		</div>
		<Sheet.Footer>
			<Sheet.Close asChild let:builder>
				<Button builders={[builder]} type="submit">Save changes</Button>
			</Sheet.Close>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>
