import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { Search } from './Search'
import { Provider } from 'react-redux'
import { useCharacters } from '../../hooks/useCharacters'
import { useFavoritesContext } from '../layout/FavoritesContext'
import { store } from '../../store'

jest.mock('../../hooks/useCharacters', () => ({
	useCharacters: jest.fn(),
}))

jest.mock('../layout/FavoritesContext', () => ({
	useFavoritesContext: jest.fn(),
}))

describe('Search Component', () => {
	beforeEach(() => {
		jest.clearAllMocks()
		;(useFavoritesContext as jest.Mock).mockReturnValue({
			disableFavorites: jest.fn(),
			showFavorites: false,
		})
		;(useCharacters as jest.Mock).mockReturnValue({
			data: [
				{
					id: 2,
					name: 'Vegeta',
					image: 'vegeta.png',
					race: 'Saiyan',
					description: 'El hombre más poderoso de la galaxia',
					transformations: [],
				},
			],
		})
	})

	it('correctly renders the input and the amount of results', () => {
		render(
			<Provider store={store}>
				<Search />
			</Provider>
		)

		expect(
			screen.getByPlaceholderText('Search for a character')
		).toBeInTheDocument()
		expect(screen.getByText('1 results')).toBeInTheDocument()
	})

	it('changes the search term and dispatches setSearchTerm', () => {
		render(
			<Provider store={store}>
				<Search />
			</Provider>
		)

		const input = screen.getByPlaceholderText('Search for a character')

		fireEvent.change(input, { target: { value: 'Vegeta' } })

		expect(store.getState().characters.searchTerm).toBe('Vegeta')
	})

	it('disable favorites when showFavorites is true', () => {
		const disableFavoritesMock = jest.fn()

		;(useFavoritesContext as jest.Mock).mockReturnValue({
			disableFavorites: disableFavoritesMock,
			showFavorites: true,
		})

		render(
			<Provider store={store}>
				<Search />
			</Provider>
		)

		const input = screen.getByPlaceholderText('Search for a character')
		fireEvent.change(input, { target: { value: 'Morty' } })

		expect(disableFavoritesMock).toHaveBeenCalled()
	})
})
