<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import type { WorkSpace, User } from '@prisma/client';
	export let workSpaces: WorkSpace;
	export let users: User[];
</script>

<Sheet.Root>
	<Sheet.Trigger asChild let:builder>
		<Button builders={[builder]} class="rounded-medium" variant="ghost">+ Add More</Button>
	</Sheet.Trigger>
	<Sheet.Content class="z-[1000]" side="right">
		<Sheet.Header>
			<Sheet.Title>Add a new Workspace</Sheet.Title>
			<Sheet.Description>Add a new workspace, set it's status, and add users.</Sheet.Description>
		</Sheet.Header>
		<form action="/workspace/?add"></form>
		<Sheet.Footer>
			<Sheet.Close asChild let:builder>
				<Button builders={[builder]} type="submit">Save changes</Button>
			</Sheet.Close>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>
