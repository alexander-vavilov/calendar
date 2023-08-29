import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CalendarContextProvider } from './contexts/CalendarContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<CalendarContextProvider>
			{' '}
			<App />
		</CalendarContextProvider>
	</React.StrictMode>
)
