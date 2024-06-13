<script>
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import CareSwitchLogo from '$lib/components/CareSwitchLogo.svelte';
	let { children } = $props();
</script>

<ModeWatcher />
<div id="top_container" class="flex flex-col">
	<header class="border-b-1 fixed left-0 right-0 top-0 z-[99] h-12 w-full md:h-16">
		<div class="header-wrapper flex h-full w-full items-center justify-between px-3 md:px-6">
			<a
				href="/"
				class="group flex h-full w-fit items-center justify-start text-xl transition-all hover:fill-blue-500 hover:text-blue-500"
			>
				<div class="text-bold flex items-end justify-start pl-2">Yash +</div>
				&nbsp;
				<div class="flex h-full max-h-full scale-75 items-center justify-start">
					<CareSwitchLogo />
				</div>
			</a>
			<div class="w-fit pr-3">
				<a class="transition-all hover:text-blue-500" href="/notes"> Notes </a>
				|
				<a class="transition-all hover:text-blue-500" href="/guide"> Guide</a>
			</div>
		</div>
	</header>
	<div id="content_container" class="flex h-full min-h-screen w-full flex-col md:flex-row">
		<nav
			id="main_nav"
			class="md:justify-startjustify-around fixed top-12 z-[98] flex h-12 w-full items-center px-3 md:fixed md:bottom-0 md:left-0 md:top-0 md:mt-24 md:h-screen md:w-64 md:flex-col md:items-start md:pl-6"
		>
			<a
				class="home-link group-transition-all group flex h-12 w-full items-center justify-center hover:text-blue-500 focus:underline md:justify-start"
				href="/users"
			>
				<div class="flex h-full w-[10%] flex-col justify-center">
					<i class="fa-solid fa-user text-sm group-hover:fill-blue-500"></i>
				</div>
				Users
			</a>
			<a
				class="home-link group-transition-all group flex h-12 w-full items-center justify-center hover:text-blue-500 focus:underline md:justify-start"
				href="/workspaces"
			>
				<div class="flex h-full w-[10%] flex-col justify-center">
					<i class="fa-solid fa-desktop text-sm group-hover:fill-blue-500"></i>
				</div>
				Workspaces
			</a>
		</nav>

		<main
			class="mt-24 h-full max-h-full min-h-[100%] w-full overflow-y-auto px-3 py-2 md:ml-64 md:mt-24 md:px-10"
		>
			{@render children()}
		</main>
	</div>
</div>
