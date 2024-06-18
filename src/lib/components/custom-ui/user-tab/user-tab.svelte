<script lang="ts">
	import type { User } from '@prisma/client';
	export let user: User;
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
</script>

<div class="h-fit w-full">
	<Popover.Root portal={null}>
		<Popover.Trigger asChild let:builder>
			<Button builders={[builder]} variant="ghost" class="h-fit w-full bg-white pl-0 text-black">
				<div class="flex h-full w-full">
					<div class="grid w-10 place-items-center px-2">
						<svg width="10" height="10">
							<circle cx="5" cy="5" r="5" fill={user.online ? 'green' : 'red'}></circle>
						</svg>
					</div>
					<div class="flex-4">
						{user.name}
					</div>
				</div>
			</Button>
		</Popover.Trigger>
		<Popover.Content class="w-80">
			<div class="grid gap-4">
				<div class="space-y-2">
					<h4 class="font-medium leading-none">Workspace - {user.name}</h4>
					<p class="text-sm text-muted-foreground">Manage user in workspace</p>
				</div>
				<div class="grid gap-2"></div>
			</div>
		</Popover.Content>
	</Popover.Root>
</div>
