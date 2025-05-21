import { useState } from 'react';
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
	type SortingState,
} from '@tanstack/react-table';
import { Checkbox } from './ui/checkbox';

type Article = {
	id: number;
	articleTitle: string;
	keywordTraffic: string;
	words: number;
	createdOn: string;
	action: string;
	publish: string;
};

const data = [
	{
		id: 1,
		articleTitle: 'How to Improve Your Skills in League of Legends',
		keywordTraffic: 'league of legends [2240000]',
		words: 4575,
		createdOn: '20 hours ago',
		action: 'view',
		publish: 'wordpress',
	},
	{
		id: 2,
		articleTitle: 'How to Master Last Hitting in League of Legends',
		keywordTraffic: 'league of legends [2240000]',
		words: 3480,
		createdOn: '21 hours ago',
		action: 'view',
		publish: 'wordpress',
	},
	{
		id: 3,
		articleTitle: '7 Tips for Better Teamplay in League of Legends',
		keywordTraffic: 'league of legends [2240000]',
		words: 2676,
		createdOn: 'a day ago',
		action: 'view',
		publish: 'wordpress',
	},
	{
		id: 4,
		articleTitle: 'Top Virtual Executive Assistant Services (2024)',
		keywordTraffic: 'virtual executive assistant [2900]',
		words: 2408,
		createdOn: '1 Oct, 24',
		action: 'view',
		publish: 'wordpress',
	},
	{
		id: 5,
		articleTitle: 'Unlimited Graphics Design Solutions',
		keywordTraffic: 'unlimited graphic design services [390]',
		words: 1793,
		createdOn: '---',
		action: 'view',
		publish: 'wordpress',
	},
	{
		id: 6,
		articleTitle: 'Top Amazon Payment Methods for Quick Access to Funds',
		keywordTraffic: 'amazon payment methods [3600]',
		words: 2647,
		createdOn: '---',
		action: 'view',
		publish: 'wordpress',
	},
	{
		id: 7,
		articleTitle:
			"Backlinks 101: What are backlinks and why they're important [Free template]",
		keywordTraffic: 'backlinks [8100]',
		words: 2261,
		createdOn: '---',
		action: 'view',
		publish: 'wordpress',
	},
	{
		id: 8,
		articleTitle: '7 Leading AI SEO Tools in 2024 (Ranked & Compared)',
		keywordTraffic: 'ai seo software [880]',
		words: 1543,
		createdOn: '---',
		action: 'view',
		publish: 'wordpress',
	},
	{
		id: 9,
		articleTitle: 'Unlimited Graphic Design Services You Can Rely On',
		keywordTraffic: 'unlimited graphic design services [390]',
		words: 1974,
		createdOn: '---',
		action: 'view',
		publish: 'wordpress',
	},
];

export default function ArticleTable() {
	const [sorting, setSorting] = useState<SortingState>([]);
	const [rowSelection, setRowSelection] = useState({});
	const [pagination, setPagination] = useState({
		pageIndex: 0,
		pageSize: 10,
	});

	const columnHelper = createColumnHelper<Article>();

	const columns = [
		columnHelper.display({
			id: 'select',
			header: ({ table }) => (
				<Checkbox
					checked={table.getIsAllPageRowsSelected()}
					onCheckedChange={(checked) =>
						table.toggleAllPageRowsSelected(!!checked)
					}
				/>
			),
			cell: ({ row }) => (
				<Checkbox
					checked={row.getIsSelected()}
					onCheckedChange={(checked) => row.toggleSelected(!!checked)}
				/>
			),
		}),
		columnHelper.accessor('articleTitle', {
			header: () => (
				<div className='font-extrabold text-lg text-black'>Article Title</div>
			),
			cell: (info) => (
				<div className='font-medium text-black'>{info.getValue()}</div>
			),
		}),
		columnHelper.accessor('keywordTraffic', {
			header: ({ column }) => (
				<div
					className='flex items-center cursor-pointer font-extrabold text-lg text-black'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
					Keyword Traffic
					<span className='ml-1'>
						{column.getIsSorted() === 'asc'
							? '▲'
							: column.getIsSorted() === 'desc'
							? '▼'
							: ''}
					</span>
				</div>
			),
		}),
		columnHelper.accessor('words', {
			header: ({ column }) => (
				<div
					className='flex items-center cursor-pointer font-extrabold text-lg text-black'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
					Words
					<span className='ml-1'>
						{column.getIsSorted() === 'asc'
							? '▲'
							: column.getIsSorted() === 'desc'
							? '▼'
							: ''}
					</span>
				</div>
			),
		}),
		columnHelper.accessor('createdOn', {
			header: ({ column }) => (
				<div
					className='flex items-center cursor-pointer font-extrabold text-lg text-black'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
					Created On
					<span className='ml-1'>
						{column.getIsSorted() === 'asc'
							? '▲'
							: column.getIsSorted() === 'desc'
							? '▼'
							: ''}
					</span>
				</div>
			),
		}),
		columnHelper.accessor('action', {
			header: () => (
				<div className='font-extrabold text-lg text-black'>Action</div>
			),
			cell: () => (
				<button className='px-3 py-1 bg-white text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50'>
					View
				</button>
			),
		}),
		columnHelper.accessor('publish', {
			header: () => (
				<div className='font-extrabold text-lg text-black'>Publish</div>
			),
			cell: () => (
				<div className='flex justify-center items-center'>
					<div className='bg-blue-100 p-2 rounded-full'>
						<svg
							width='16'
							height='16'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
							className='text-blue-500'>
							<path
								d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z'
								fill='currentColor'
							/>
						</svg>
					</div>
				</div>
			),
		}),
	];

	const table = useReactTable<Article>({
		data,
		columns,
		state: {
			sorting,
			rowSelection,
			pagination,
		},
		onSortingChange: setSorting,
		onRowSelectionChange: setRowSelection,
		onPaginationChange: setPagination,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
	});

	return (
		<div className='w-full text-black'>
			<div className='border rounded-md overflow-hidden'>
				<table className='min-w-full divide-y divide-gray-200'>
					<thead className='bg-gray-50'>
						{table.getHeaderGroups().map((headerGroup) => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<th
										key={header.id}
										className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext()
											  )}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody className='bg-white divide-y divide-gray-200'>
						{table.getRowModel().rows.map((row) => (
							<tr
								key={row.id}
								className={row.getIsSelected() ? 'bg-gray-50' : ''}>
								{row.getVisibleCells().map((cell) => (
									<td
										key={cell.id}
										className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className='flex items-center justify-between py-4'>
				<div className='text-sm text-gray-500'>
					Total {data.length} Article Titles | Showing{' '}
					{pagination.pageIndex * pagination.pageSize + 1} to{' '}
					{Math.min(
						(pagination.pageIndex + 1) * pagination.pageSize,
						data.length
					)}{' '}
					of {data.length}
				</div>
				<div className='flex items-center space-x-2'>
					<button
						className='px-3 py-1 bg-white text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50'
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}>
						Previous
					</button>
					<span className='text-sm text-gray-700'>
						Page {table.getState().pagination.pageIndex + 1} of{' '}
						{table.getPageCount()}
					</span>
					<button
						className='px-3 py-1 bg-white text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50'
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}>
						Next
					</button>
				</div>
			</div>
		</div>
	);
}
