<script lang="ts">
</script>

<div class="relative max-h-full max-w-full flex-grow overflow-y-auto">
	<div class="sticky top-0 z-[98] flex h-12 w-full">
		<slot name="header" />
	</div>
	<div class="h-full w-full">
		<slot name="content" />
	</div>
</div>
