import ArticleTable from '@/components/data-table';
import DashboardLayout from '../../dashboard-layout';
import { SiteHeader } from '@/components/site-header';

function GenerateDashboardArticle() {
	return (
		<DashboardLayout>
			<SiteHeader />
			<div className='px-4 lg:px-6 mb-10'>
				<ArticleTable />
			</div>
		</DashboardLayout>
	);
}

export default GenerateDashboardArticle;
