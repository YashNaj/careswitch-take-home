<script lang="ts">
	import WorkSpaceCard from '$lib/components/WorkSpaceCard.svelte';
	let { data } = $props();
</script>

<svelte:head>
	<title>Workspaces</title>
</svelte:head>
<h1 class="flex items-start justify-start text-3xl font-bold">Workspaces</h1>
<div class="max-h-full w-full bg-red-400">
	{#each data.workSpaces as workSpace}
		<WorkSpaceCard {workSpace} />
	{/each}
</div>
