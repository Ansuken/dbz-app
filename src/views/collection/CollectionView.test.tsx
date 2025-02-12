import '@testing-library/jest-dom'
import { render, screen, cleanup } from '@testing-library/react'
import { CollectionView } from './CollectionView'
import { useAppSelector, useAppDispatch } from '../../hooks/hooks'
import { useFavoritesContext } from '../../components/layout/FavoritesContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockNavigate,
}))

jest.mock('../../hooks/hooks', () => ({
	useAppSelector: jest.fn(),
	useAppDispatch: jest.fn(),
}))

jest.mock('../../components/layout/FavoritesContext', () => ({
	useFavoritesContext: jest.fn(),
}))

describe('CollectionView Component', () => {
	const queryClient = new QueryClient()

	const mockCharacters = [
		{
			id: 1,
			name: 'Goku',
			image: 'goku.png',
			race: 'Saiyan',
			description: 'Saiyan legendario',
			transformations: [],
		},
		{
			id: 2,
			name: 'Vegeta',
			image: 'vegeta.png',
			race: 'Saiyan',
			description: 'Orgulloso príncipe',
			transformations: [],
		},
	]

	const mockFavorites = [
		{
			id: 3,
			name: 'Gohan',
			image: 'gohan.png',
			race: 'Human',
			description: 'Héroe de la Tierra',
			transformations: [],
		},
	]

	beforeEach(() => {
		jest.clearAllMocks()
		;(useAppDispatch as jest.Mock).mockReturnValue(jest.fn())
	})

	afterEach(() => {
		cleanup()
	})

	it('renders the list of characters when `showFavorites` is false', async () => {
		;(useFavoritesContext as jest.Mock).mockReturnValue({
			showFavorites: false,
		})
		;(useAppSelector as jest.Mock).mockReturnValue(mockCharacters)

		render(
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<CollectionView />
				</QueryClientProvider>
			</BrowserRouter>
		)

		expect(await screen.findByText('Goku')).toBeInTheDocument()
		expect(await screen.findByText('Vegeta')).toBeInTheDocument()
		expect(screen.queryByText('Gohan')).not.toBeInTheDocument()
	})

	it('renders the list of favorites when `showFavorites` is true', async () => {
		;(useFavoritesContext as jest.Mock).mockReturnValue({
			showFavorites: true,
		})
		;(useAppSelector as jest.Mock).mockReturnValue(mockFavorites)

		render(
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<CollectionView />
				</QueryClientProvider>
			</BrowserRouter>
		)

		expect(await screen.findByText('Gohan')).toBeInTheDocument()
		expect(screen.queryByText('Goku')).not.toBeInTheDocument()
		expect(screen.queryByText('Vegeta')).not.toBeInTheDocument()
	})

	it('shows the "No results found" message when the list is empty', async () => {
		;(useFavoritesContext as jest.Mock).mockReturnValue({
			showFavorites: false,
		})
		;(useAppSelector as jest.Mock).mockReturnValue([])

		render(
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<CollectionView />
				</QueryClientProvider>
			</BrowserRouter>
		)

		expect(
			await screen.findByText('No se encontraron resultados.')
		).toBeInTheDocument()
	})
})
