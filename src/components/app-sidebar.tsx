import * as React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ChevronDown, FileText, ScrollText, Waypoints } from 'lucide-react';
import {
	Sidebar,
	SidebarContent,
	// SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
} from './ui/sidebar';
import { SidebarSubmenu } from './sidebar-submenue';
import { Link } from 'react-router-dom';

export function AppSidebar({ ...props }) {
	const data = {
		navMain: [
			{
				title: 'Articles',
				url: '',
				icon: ScrollText,
				children: [
					{
						title: 'Create Article',
						url: '',
					},
					{
						title: 'Generated Articles',
						url: '/articles/generate',
					},
					{
						title: 'Keyword Projects',
						url: '',
					},
					{
						title: 'AI Keyword to Article',
						url: '',
					},
					{
						title: 'Steal Competitor Keyword',
						url: '',
					},
					{
						title: 'Import Keyword from GSC',
						url: '',
					},
					{
						title: 'Manual Keyword to Article',
						url: '',
					},
					{
						title: 'Bulk Keyword to Article',
						url: '',
					},
					{
						title: 'Longtail Keyword to Article',
						url: '',
					},
					{
						title: 'Article Settings',
						url: '',
					},
				],
			},
			{
				title: 'Auto Blog',
				url: '',
				icon: FileText,
			},
			{
				title: 'Internal Links',
				url: '',
				icon: Waypoints,
			},
			{
				title: 'Free Backlinks',
				url: '',
				icon: Waypoints,
			},
			{
				title: 'Integrations',
				url: '',
				icon: Waypoints,
			},
		],
	};

	const [activeItem, setActiveItem] = React.useState('Articles');

	return (
		<Sidebar collapsible='offcanvas' className='border-r' {...props}>
			<div className='flex flex-col h-full dark:bg-slate-950'>
				<SidebarHeader className='p-4'>
					<div className='flex flex-col justify-center items-center gap-3'>
						<span className='font-bold text-4xl'>abun</span>
						<button className='w-fit gap-2 flex justify-center items-center rounded-full border border-gray-200 bg-transparent px-4 py-2 mb-2'>
							<Avatar className='h-6 w-6'>
								<AvatarImage
									src='https://avatars.githubusercontent.com/u/16914288?v=4'
									alt='User Avatar'
								/>
								<AvatarFallback delayMs={600}>UA</AvatarFallback>
							</Avatar>
							<span className='font-medium'>amazon.com</span>
							<ChevronDown className='w-4 h-4 ml-2' />
						</button>
					</div>
				</SidebarHeader>
				<SidebarContent className='px-2'>
					<SidebarMenu>
						{data.navMain.map((item, index) => (
							<SidebarMenuItem key={index}>
								{item.children ? (
									<SidebarSubmenu
										item={item}
										isActive={activeItem === item.title}
										onClick={() => setActiveItem(item.title)}
									/>
								) : (
									<SidebarMenuButton
										asChild
										className='w-full flex items-center py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800'>
										<Link
											to={{ pathname: item.url }}
											className='flex items-center'>
											{item.icon && <item.icon className='w-5 h-5 mr-3' />}
											<span className='text-sm font-medium'>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								)}
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarContent>
			</div>
		</Sidebar>
	);
}
