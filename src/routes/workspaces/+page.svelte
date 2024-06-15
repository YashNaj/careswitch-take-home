<script lang="ts">
	import PageContainer from '$lib/components/custom-ui/page-container/page-container.svelte';
	import AddWorkSpace from './workspace-add-sheet.svelte';
	let { data } = $props();
</script>

<PageContainer>
	<span slot="title">
		<h1 class="text-2xl font-bold">Workspaces</h1>
	</span>
	<span slot="action">
		<AddWorkSpace />
	</span>
</PageContainer>
