<script lang="ts">
	export let indicatorType: 'online' | 'active' = 'online';

	export let online = true;
</script>

{#if online}
	<span
		class="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300"
	>
		<span class="me-1 h-2 w-2 rounded-full bg-green-500"></span>
		{indicatorType == 'online' ? 'Online' : 'Active'}
	</span>
{:else}
	<span
		class="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300"
	>
		<span class="me-1 h-2 w-2 rounded-full bg-red-500"></span>
		{indicatorType == 'online' ? 'Offilne' : 'Inactive'}
	</span>
{/if}
