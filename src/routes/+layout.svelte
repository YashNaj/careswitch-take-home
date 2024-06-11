<script>
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	let { children } = $props();
</script>

<ModeWatcher />

<header
	class="border-b-1 flex h-12 w-full items-center justify-between border border-b-white border-opacity-30 md:h-14"
>
	<a href="/" class="w-fit pl-3 font-bold transition-all hover:text-blue-500">Yash + Carefree ❤️</a>
	<div class="w-fit pr-3">
		<a class="transition-all hover:text-blue-500 hover:underline" href="/notes"> Notes </a>
		|
		<a class="transition-all hover:text-blue-500 hover:underline" href="/guide"> Guide</a>
	</div>
</header>
<main class="h-full w-full px-3 py-2 md:px-10 md:py-2">
	{@render children()}
</main>
