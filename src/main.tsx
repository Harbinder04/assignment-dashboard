import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { MessageCircle } from 'lucide-react';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<button
				className='fixed bottom-4 right-5 w-16 h-16 rounded-full bg-green-700 flex items-center justify-center shadow-lg z-50 hover:bg-green-800 transition-colors'
				aria-label='Open chat'>
				<MessageCircle className='text-white w-8 h-8 fill-white' />
			</button>
			<App />
		</BrowserRouter>
	</StrictMode>
);
