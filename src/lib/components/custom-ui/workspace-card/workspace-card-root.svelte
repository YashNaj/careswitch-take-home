<script lang="ts">
	import type { WorkSpace } from '@prisma/client';
	import { Card } from '../../ui/card';
	import { createToggle } from '$lib/runes/toggle.svelte';
	import { flyAndScale } from '$lib/utils';
	export let workSpace: WorkSpace;
	export const menuToggle = createToggle();
	import StatusIndicator from '$lib/components/indicator-status-universal.svelte';
	import { goto } from '$app/navigation';
</script>

<Card
	on:hover={menuToggle.setToggle}
	on:blur={menuToggle.setToggle}
	onclick={() => goto(`/workspaces/${workSpace.id}`)}
	class="group relative flex h-96 w-auto min-w-80 cursor-pointer flex-col justify-self-center overflow-hidden rounded-md px-3 py-2 first:ml-0 last:mr-0 sm:w-[45%]  md:justify-self-start"
>
	<div class="flex w-full">
		<h1 class="flex-3 text-xl font-bold">{workSpace.name}</h1>
		<h3 class="flex flex-1 items-center justify-end">
			<StatusIndicator online={workSpace.active} type="active" />
		</h3>
	</div>

	<div
		class="group-hover:translate absolute bottom-[-4rem] left-0 h-16 w-full rounded-b-md bg-primary-careRed font-bold text-white transition-all"
		transition:flyAndScale
	>
		Go to Workspace
	</div>
</Card>
