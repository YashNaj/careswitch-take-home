<script lang="ts">
	import type { User } from '@prisma/client';
	import { createTable, Render, Subscribe, createRender } from 'svelte-headless-table';
	import * as Table from '$lib/components/ui/table';
	import {
		addPagination,
		addSortBy,
		addTableFilter,
		addHiddenColumns,
		addSelectedRows
	} from 'svelte-headless-table/plugins';
	import { readable } from 'svelte/store';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { StatusIndicator } from '$lib/components/custom-ui/main-components';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import ArrowUpDown from 'lucide-svelte/icons/arrow-up-down';
	import DataTableActions from './workspace-table-actions.svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import DataTableCheckbox from './workspace-table-checkbox.svelte';

	export let data: User[];

	const table = createTable(readable(data), {
		page: addPagination(),
		sort: addSortBy(),
		filter: addTableFilter({
			fn: ({ filterValue, value }) => value.toLowerCase().includes(filterValue.toLowerCase())
		}),
		hide: addHiddenColumns(),
		select: addSelectedRows()
	});

	const columns = table.createColumns([
		table.column({
			accessor: 'id',
			header: (_, { pluginStates }) => {
				const { allPageRowsSelected } = pluginStates.select;
				return createRender(DataTableCheckbox, {
					checked: allPageRowsSelected
				});
			},
			cell: ({ row }, { pluginStates }) => {
				const { getRowState } = pluginStates.select;
				const { isSelected } = getRowState(row);
				return createRender(DataTableCheckbox, {
					checked: isSelected
				});
			}
		}),
		table.column({
			accessor: 'name',
			header: 'Name'
		}),
		table.column({
			accessor: 'email',
			header: 'Email'
		}),
		table.column({
			accessor: 'online',
			header: 'Online',
			cell: ({ value }) => {
				return createRender(StatusIndicator, { online: value });
			}
		}),
		table.column({
			accessor: ({ id }) => id,
			header: '',
			cell: ({ value }) => {
				return createRender(DataTableActions, { id: value });
			},
			plugins: {
				sort: {
					disable: false
				}
			}
		})
	]);

	const { headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates, flatColumns, rows } =
		table.createViewModel(columns);

	const { hasNextPage, hasPreviousPage, pageIndex } = pluginStates.page;
	const { filterValue } = pluginStates.filter;
	const { hiddenColumnIds } = pluginStates.hide;
	const { selectedDataIds } = pluginStates.select;

	const hideColumnids = flatColumns.map((col) => col.id);
	let hideForId = Object.fromEntries(hideColumnids.map((id) => [id, true]));

	$: $hiddenColumnIds = Object.entries(hideForId)
		.filter(([, hide]) => !hide)
		.map(([id]) => id);

	const hidableCols = ['reigon', 'email', 'workSpaces', 'role'];
</script>

<div class="flex h-full w-full flex-col">
	<div class="flex h-10 w-full md:mt-10">
		<div class="mr-2 flex w-full items-center md:mr-0">
			<Input
				class="max-w-xs md:max-w-md"
				placeholder="Filter by name/email/region..."
				type="text"
				bind:value={$filterValue}
			/>
		</div>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild let:builder>
				<Button variant="outline" class="ml-auto" builders={[builder]}>
					Columns <ChevronDown class="ml-2 h-4 w-4" />
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				{#each flatColumns as col}
					{#if hidableCols.includes(col.id)}
						<DropdownMenu.CheckboxItem bind:checked={hideForId[col.id]}>
							{col.header}
						</DropdownMenu.CheckboxItem>
					{/if}
				{/each}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>
	<div class="mb-4 mt-4 flex flex-grow flex-col overflow-y-auto">
		<div
			class="flex min-h-full flex-col rounded-md border sm:max-h-[8rem] md:max-h-[30rem] lg:max-h-[30rem]"
		>
			<Table.Root class=" relative h-full  w-full overflow-auto" {...$tableAttrs}>
				<Table.Header class="sticky left-0 right-0 top-0 z-[50] min-w-full bg-white">
					{#each $headerRows as headerRow}
						<Subscribe rowAttrs={headerRow.attrs()}>
							<Table.Row>
								{#each headerRow.cells as cell (cell.id)}
									<Subscribe let:props attrs={cell.attrs()} let:attrs props={cell.props()}>
										<Table.Head {...attrs} class="[&:has([role=checkbox])]:pl-3">
											{#if cell.id === 'name' || cell.id === 'regionId' || cell.id === 'email'}
												<Button variant="ghost" on:click={props.sort.toggle}>
													<Render of={cell.render()} />
													<ArrowUpDown class={'ml-2 h-4 w-4'} />
												</Button>
											{:else}
												<Render of={cell.render()} />
											{/if}
										</Table.Head>
									</Subscribe>
								{/each}
							</Table.Row>
						</Subscribe>
					{/each}
				</Table.Header>
				<Table.Body {...$tableBodyAttrs}>
					{#each $pageRows as row (row.id)}
						<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
							<Table.Row {...rowAttrs} data-state={$selectedDataIds[row.id] && 'selected'}>
								{#each row.cells as cell (cell.id)}
									<Subscribe attrs={cell.attrs()} let:attrs>
										<Table.Cell {...attrs}>
											<div class="flex-1">
												<Render of={cell.render()} />
											</div>
										</Table.Cell>
									</Subscribe>
								{/each}
							</Table.Row>
						</Subscribe>
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
	</div>
	<div class="flex h-10 w-full">
		<div class="flex flex-1 items-center justify-start pl-2 text-sm text-muted-foreground">
			{Object.keys($selectedDataIds).length} of{' '}
			{$rows.length} row(s) selected.
		</div>
		<div class="flex justify-between">
			<Button
				variant="outline"
				size="sm"
				class="mr-2"
				on:click={() => ($pageIndex = $pageIndex - 1)}
				disabled={!$hasPreviousPage}>Previous</Button
			>
			<Button
				variant="outline"
				size="sm"
				disabled={!$hasNextPage}
				on:click={() => ($pageIndex = $pageIndex + 1)}>Next</Button
			>
		</div>
	</div>
</div>
