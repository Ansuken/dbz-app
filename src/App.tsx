import { Layout } from './components/layout/Layout'
import { AppRouter } from './router/AppRouter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>
				<AppRouter />
			</Layout>
		</QueryClientProvider>
	)
}
