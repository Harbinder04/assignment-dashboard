import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarInset } from '@/components/ui/sidebar';
// import { SiteHeader } from '@/components/site-header';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<SidebarProvider>
			<AppSidebar variant='inset' />
			<SidebarInset>{children}</SidebarInset>
		</SidebarProvider>
	);
}
