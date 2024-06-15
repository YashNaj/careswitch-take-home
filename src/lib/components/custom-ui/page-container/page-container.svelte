<script lang="ts">
</script>

<div class="relative flex max-h-full max-w-full flex-grow flex-col overflow-y-auto">
	<div class=" z-[50] flex h-12 w-full justify-between">
		<div class="h-full w-fit">
			<slot name="title"></slot>
		</div>
		<div class="h-full w-fit">
			<slot name="action"></slot>
		</div>
	</div>
	<div class="h-full w-full flex-grow overflow-y-auto">
		<slot name="content" />
	</div>
</div>
