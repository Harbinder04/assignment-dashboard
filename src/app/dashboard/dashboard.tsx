import DashboardLayout from './dashboard-layout';

function DashBoard() {
	return (
		<DashboardLayout>
			<div className='flex flex-col items-center justify-center h-screen'>
				<h1 className='text-4xl font-bold'>Dashboard</h1>
				<p className='mt-4 text-lg'>Welcome to the dashboard!</p>
			</div>
		</DashboardLayout>
	);
}

export default DashBoard;
