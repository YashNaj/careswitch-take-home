<script lang="ts">
	let { data } = $props();
	import AddUserForm from './user-add-sheet.svelte';
	import DataTable from './user-table.svelte';
	import { createToggle } from '$lib/runes/toggle.svelte';
	const addMenu = createToggle();
	console.log(addMenu.toggle);
</script>

<div class="title-heading__container flex w-full">
	<h1 class="flex w-full items-start justify-start pb-4 text-3xl font-bold">Users</h1>
	<AddUserForm />
</div>
<DataTable data={data.users} />
