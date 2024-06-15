<script lang="ts">
	import '../app.css';
	import MainHeader from '$lib/components/main-header.svelte';
	import MainSideBar from '$lib/components/main-sidebar.svelte';
	import { fade } from 'svelte/transition';
	import { navigating } from '$app/stores';
	let { children, data } = $props();
	let pageTitle = $state('');
	$effect(() => {
		pageTitle = document.title;
	});
</script>

<div class="text- flex h-screen flex-col">
	<!-- Main Header -->
	<div class="w-full">
		<MainHeader />
	</div>

	<!-- Main Content -->
	<div class="flex flex-grow overflow-hidden">
		<!-- Sidebar -->
		<div class="hidden w-64 md:block">
			<MainSideBar />
		</div>

		<!-- Content Area -->
		<div class="flex flex-grow flex-col overflow-y-auto p-4">
			<!-- Page Header -->
			<!-- Main Content -->
			<div class="relative flex-grow overflow-y-auto">
				<div class="absolute left-0 right-0 top-0 h-full w-full">
					{@render children()}
				</div>
			</div>
		</div>
	</div>
</div>
