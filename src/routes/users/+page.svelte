<script lang="ts">
	let { data } = $props();
	import AddUserForm from './user-add-sheet.svelte';
	import DataTable from './user-table.svelte';
	import { createToggle } from '$lib/runes/toggle.svelte';
	const addMenu = createToggle();
	import PageTemplate from '$lib/components/custom-ui/page-container/page-container.svelte';
	console.log(addMenu.toggle);
</script>

<!---->
<!-- <div class="flex h-12 w-full justify-between"> -->
<!-- 	<h1 class="text-2xl text-black">Users</h1> -->
<!-- </div> -->
<!-- <div class="flex h-full w-full flex-col"> -->
<!-- 	<DataTable data={data.users} /> -->
<!-- </div> -->

<PageTemplate>
	<span slot="header">
		<div class="flex h-full w-full items-baseline justify-between">
			<h1 class="text-2xl font-bold">Users</h1>
			<AddUserForm />
		</div>
	</span>
	<span slot="content">
		<DataTable data={data.users} />
	</span>
</PageTemplate>
