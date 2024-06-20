<script lang="ts">
	import CareSwitchLogo from './careswitch-logo.svelte';
</script>

<header class=" z-[99] h-12 w-full shadow-sm md:h-16">
	<div
		class="header-wrapper border-b-1 flex h-full w-full items-center justify-between border-primary-careRed px-3 md:px-6"
	>
		<a
			href="/"
			class="group flex h-full w-fit items-center justify-start text-xl transition-all hover:fill-blue-500 hover:text-primary-careRed"
		>
			<div class="text-bold flex items-end justify-start">Yash +</div>
			&nbsp;
			<div class="mr-4 flex h-full max-h-full scale-75 items-center justify-start">
				<CareSwitchLogo />
			</div>
		</a>
		<div class="w-fit pr-3">
			<a class="transition-all hover:text-primary-careRed" href="/notes"> Notes </a>
			|
			<a class="transition-all hover:text-primary-careRed" href="/guide"> Guide</a>
		</div>
	</div>
</header>
