<script lang="ts">
	import PageContainer from '$lib/components/custom-ui/page-container/page-container.svelte';
	import type { User, WorkSpace } from '@prisma/client';
	import { StatusIndicator } from '$lib/components/custom-ui/main-components';
	import WorkspaceFormUpdate from '$lib/components/custom-ui/forms/workspace/workspace-form-update.svelte';
	import { UserTab } from '$lib/components/custom-ui/user-tab';
	import WorkspaceFormDelete from '$lib/components/custom-ui/forms/workspace/workspace-form-delete.svelte';
	import WorkspaceTableUsers from './workspace-table-users.svelte';
	import { ConnectUsers } from '$lib/components/custom-ui/forms/workspace';

	let { data } = $props();

	//TODO: Maybe make ts stop crying :'(
	let workSpace: WorkSpace & {
		members: User[];
	} = $state(data.workSpace);

	//TODO: Maybe make ts stop crying :'(
	$effect(() => {
		workSpace = data.workSpace;
	});

	//forms
	let form_update = data.workSpaceUpdateForm;
	let form_delete = data.workSpaceDeleteForm;
	let form_add_member = data.workSpaceAddMemberForm;
	let form_remove_member = data.workSpaceRemoveMemberForm;
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
		<div class="flex h-full w-full flex-col md:flex-row">
			<div class="workspace_expanded_container flex h-full w-full flex-col md:w-[30%]">
				<h1 class="border-b-1 h-fit text-xl font-bold">Settings</h1>
				<div class="flex h-full w-full flex-col py-2 md:pr-4">
					<WorkspaceFormUpdate id={workSpace.id} data={form_update} />
					<div class="mt-5 h-fit w-full">
						<WorkspaceFormDelete id={workSpace.id} data={form_delete} />
					</div>
				</div>
			</div>
			<div
				class="workspace_expanded_container mt-10 flex h-full w-full flex-col md:m-0 md:w-[70%] md:border md:border-b-0 md:border-r-0 md:border-t-0 md:border-opacity-80 md:pl-4"
			>
				<div class="border-b-1 mb-6 flex h-fit md:mb-0">
					<h1 class="border-b-1 flex h-fit text-xl font-bold">
						Members : {workSpace.members.length}
					</h1>
					<div class="flex h-fit w-fit flex-1 items-center justify-end">
						<ConnectUsers />
					</div>
				</div>
				<div class="h-full max-h-full w-full">
					<WorkspaceTableUsers data={workSpace.members} />
				</div>
			</div>
		</div>
	</span>
</PageContainer>
