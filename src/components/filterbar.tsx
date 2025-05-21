import { useState } from 'react';
import { cn } from '@/lib/utils';

function FilterBar({ data }: { data: { id: number; name: string }[] }) {
	const [activeTab, setActiveTab] = useState('Generated Article');

	return (
		<div className='flex items-center rounded-lg border w-fit bg-white shadow-sm'>
			{data.map((item) => (
				<button
					key={item.id}
					onClick={() => setActiveTab(item.name)}
					className={cn(
						'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border-r-2',
						activeTab === item.name
							? 'bg-blue-600 text-white rounded-lg border-blue-600'
							: 'bg-white text-gray-700 hover:bg-gray-100 '
					)}>
					{item.name}
				</button>
			))}
		</div>
	);
}

export default FilterBar;
