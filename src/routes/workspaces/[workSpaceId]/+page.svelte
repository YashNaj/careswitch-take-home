<script lang="ts">
	import PageContainer from '$lib/components/custom-ui/page-container/page-container.svelte';
	import type { User, WorkSpace } from '@prisma/client';
	import StatusIndicator from '$lib/components/indicator-status-universal.svelte';
	import WorkspaceFormUpdate from '$lib/components/custom-ui/forms/workspace/workspace-form-update.svelte';
	import { UserTab } from '$lib/components/custom-ui/user-tab';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';

	let { data } = $props();

	let workSpace: WorkSpace & {
		members: User[];
	} = $state(data.workSpace);

	$effect(() => {
		workSpace = data.workSpace;
		console.log('EFFECT- WorkSpace', { workSpace });
	});

	let form_update = data.workSpaceUpdateForm;
</script>

<PageContainer>
	<span slot="title">
		<h1 class="text-2xl font-bold will-change-auto">
			{workSpace.name}
		</h1>
	</span>
	<span slot="action">
		<StatusIndicator type="active" online={workSpace.active} />
	</span>
	<span slot="content">
		<div class="flex h-full max-h-full w-full flex-grow flex-col md:flex-row">
			<div class="workspace_expanded_container flex h-full flex-1 flex-col">
				<h1 class="border-b-1 h-fit text-xl font-bold">Settings</h1>
				<div class="flex h-full w-full flex-col py-2 pr-4">
					<WorkspaceFormUpdate id={workSpace.id} data={form_update} />
				</div>
			</div>
			<div class="workspace_expanded_container flex h-full flex-1 flex-col">
				<h1 class="border-b-1 h-fit text-xl font-bold">Members</h1>
				<ul class="flex h-full w-full flex-1 flex-grow flex-wrap overflow-y-auto">
					{#each workSpace.members as member}
						<li class="h-fit w-full">
							<UserTab user={member} />
						</li>
					{/each}
				</ul>
				<div class="flex flex-1 flex-col"></div>
			</div>
		</div>
	</span>
</PageContainer>
