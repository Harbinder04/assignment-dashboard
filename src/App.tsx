import { Route, Routes } from 'react-router-dom';
import DashBoard from './app/dashboard/dashboard';
import GenerateDashboardArticle from './app/dashboard/articles/generate-article/generate-article-dashboard';

function App() {
	return (
		<Routes>
			<Route path='/' element={<DashBoard />} />
			<Route path='/articles/generate' element={<GenerateDashboardArticle />} />
		</Routes>
	);
}

export default App;
