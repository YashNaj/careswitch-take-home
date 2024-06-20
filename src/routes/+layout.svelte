<script lang="ts">
	import '../app.css';
	import { Header, Sidebar } from '$lib/components/custom-ui/main-components';
	let { children, data } = $props();
</script>

<div class="text- flex h-screen flex-col">
	<!-- Main Header -->
	<div class="w-full">
		<Header />
	</div>

	<!-- Main Content -->
	<div class="flex flex-grow overflow-hidden">
		<!-- Sidebar -->
		<div class="hidden w-64 md:block">
			<Sidebar />
		</div>

		<!-- Content Area -->
		<div class="flex flex-grow flex-col overflow-y-auto">
			<div class="relative flex-grow overflow-y-auto">
				<div class="absolute left-0 right-0 top-0 flex h-full w-full flex-col">
					{@render children()}
				</div>
			</div>
		</div>
	</div>
</div>
