<script lang="ts">
	import PageContainer from '$lib/components/custom-ui/page-container/page-container.svelte';
	import type { WorkSpace } from '@prisma/client';
	import AddWorkSpace from './workspace-add-sheet.svelte';
	import { WorkSpaceCard } from '$lib/components/custom-ui/workspace-card';
	let { data } = $props();
	let workSpaces: WorkSpace[] = data.workSpaces;
</script>

<PageContainer>
	<span slot="title">
		<h1 class="text-2xl font-bold">Workspaces</h1>
	</span>
	<span slot="action">
		<AddWorkSpace />
	</span>
	<span slot="content">
		<div
			class="flex h-auto min-h-full w-full flex-grow flex-wrap items-center justify-center gap-y-4 md:justify-between"
		>
			{#each workSpaces as workSpace}
				<WorkSpaceCard {workSpace} />
			{/each}
		</div>
	</span>
</PageContainer>
