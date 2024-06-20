<script lang="ts">
	let { data } = $props();
	import AddUserForm from './user-add-sheet.svelte';
	import DataTable from './user-table.svelte';
	import PageTemplate from '$lib/components/custom-ui/page-container/page-container.svelte';
</script>

<PageTemplate>
	<span slot="title">
		<h1 class="text-2xl font-bold">Users</h1>
	</span>

	<span slot="action">
		<AddUserForm />
	</span>
	<span slot="content">
		<DataTable data={data.users} />
	</span>
</PageTemplate>
