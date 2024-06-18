<script lang="ts">
	import PageContainer from '$lib/components/custom-ui/page-container/page-container.svelte';
	import type { User } from '@prisma/client';

	let { params, data } = $props();

	let user: User = data.user;
</script>

<PageContainer>
	<span slot="title">
		<h1 class="text-2xl font-bold">
			{user.name}
		</h1>
	</span>
	<span slot="content">
		<div class="flex h-full w-full flex-wrap justify-around"></div>
	</span>
</PageContainer>
