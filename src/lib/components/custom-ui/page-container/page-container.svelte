<script lang="ts">
</script>

<div class="relative flex max-h-full max-w-full flex-grow flex-col overflow-y-auto">
	<div class=" z-[50] flex h-12 w-full justify-between px-4 py-2 shadow-lg md:pb-2 md:shadow-md">
		<div class="h-full w-fit">
			<slot name="title"></slot>
		</div>
		<div class="flex h-full w-fit items-center justify-end">
			<slot name="action"></slot>
		</div>
	</div>
	<div class="h-full w-full flex-grow overflow-y-auto p-4">
		<slot name="content" />
	</div>
</div>
