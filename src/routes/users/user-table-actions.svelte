<script lang="ts">
	import Ellipsis from 'lucide-svelte/icons/ellipsis';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button';
	import { goto } from '$app/navigation';

	export let id: string;

	function navigateToUser() {
		return goto(`/users/${id}`);
	}
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button variant="ghost" builders={[builder]} size="icon" class="relative h-8 w-8 p-0">
			<span class="sr-only">Open menu</span>
			<Ellipsis class="h-4 w-4" />
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Group>
			<DropdownMenu.Label>Actions</DropdownMenu.Label>
			<DropdownMenu.Item class="cursor-pointer" on:click={() => navigator.clipboard.writeText(id)}>
				Copy User ID
			</DropdownMenu.Item>
		</DropdownMenu.Group>
		<DropdownMenu.Separator />
		<DropdownMenu.Item class="cursor-pointer" onclick={navigateToUser}>View User</DropdownMenu.Item>
		<DropdownMenu.Item class="cursor-pointer">Update user</DropdownMenu.Item>
		<DropdownMenu.Item class="cursor-pointer">Delete User</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
