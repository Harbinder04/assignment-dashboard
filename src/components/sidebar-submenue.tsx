import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { SidebarMenuButton } from './ui/sidebar';
import { Link } from 'react-router-dom';

interface MenuItem {
	title: string;
	icon?: React.ComponentType<{ className?: string }>;
	url?: string;
	children?: MenuItem[];
}

interface SidebarSubmenuProps {
	item: MenuItem;
	isActive: boolean | string;
	activeChildId?: string;
	onClick?: () => void;
}

export function SidebarSubmenu({
	item,
	isActive,
	activeChildId,
	onClick,
}: SidebarSubmenuProps) {
	const [isOpen, setIsOpen] = React.useState(isActive);
	const [currentActiveChild, setCurrentActiveChild] = React.useState<
		string | undefined
	>(activeChildId);

	React.useEffect(() => {
		// Keep submenu open if it or any of its children are active
		if (isActive) {
			setIsOpen(true);
		}
	}, [activeChildId, isActive]);

	const toggleSubmenu = () => {
		setIsOpen(!isOpen);
		if (onClick) onClick();
	};

	return (
		<div className='w-full'>
			<SidebarMenuButton
				className={`w-full flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800`}
				onClick={toggleSubmenu}>
				<div className='flex items-center'>
					{item.icon && <item.icon className='w-5 h-5 mr-3' />}
					<span className='text-sm font-medium'>{item.title}</span>
				</div>
				<ChevronDown
					className={`w-4 h-4 transition-transform ${
						isOpen ? 'rotate-180' : ''
					}`}
				/>
			</SidebarMenuButton>

			{isOpen && item.children && (
				<div className='relative ml-8 mt-1 space-y-1 pl-4 border-l-2 border-gray-200 dark:border-gray-700'>
					{item.children.map((child: MenuItem, index: number) => (
						<Link
							key={index}
							to={{ pathname: child.url ?? '/dashboard' }}
							className={`block py-1.5 px-3 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-slate-800 ${
								currentActiveChild === child.title ||
								activeChildId === child.title
									? 'text-blue-500'
									: 'text-black'
							}`}
							onClick={() => {
								setCurrentActiveChild(child.title);
							}}>
							{child.title}
						</Link>
					))}
				</div>
			)}
		</div>
	);
}
