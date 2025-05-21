// import { Button } from '@/components/ui/button';
// import { Separator } from '@/components/ui/separator';
// import { SidebarTrigger } from '@/components/ui/sidebar';
import FilterBar from '@/components/filterbar';

export function SiteHeader() {
	const filterData = [
		{ id: 1, name: 'Generated Article' },
		{ id: 2, name: 'Published Article' },
		{ id: 3, name: 'Schedule Article' },
		{ id: 4, name: 'Archived Article' },
	];
	return (
		<header className='flex flex-col h-50 shrink-0 items-center justify-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-50 relative mt-14'>
			<div className='flex flex-col w-full items-center gap-1 px-4 lg:gap-2 lg:px-6 mb-10'>
				<h1 className='font-bold text-4xl mb-2'>Articles</h1>
				<FilterBar data={filterData} />
				<input
					placeholder='Search for Title & Keywords...'
					className='w-full max-w-sm p-2 ring-2 ring-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-600 mt-14'
					type='text'
				/>
			</div>
		</header>
	);
}
