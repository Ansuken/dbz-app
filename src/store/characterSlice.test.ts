import charactersReducer, {
	setSearchTerm,
	setCharacters,
	addFavorite,
	removeFavorite,
	CharactersState,
} from './charactersSlice'
import { Character } from '../types/Character.ts'

describe('charactersSlice', () => {
	let initialState: CharactersState

	beforeEach(() => {
		initialState = {
			searchTerm: '',
			characters: [],
			favorites: [],
		}
	})

	test('debe manejar setSearchTerm', () => {
		const newState = charactersReducer(initialState, setSearchTerm('Rick'))
		expect(newState.searchTerm).toBe('Rick')
	})

	test('must handle setCharacters', () => {
		const mockCharacters: Character[] = [
			{
				id: 1,
				name: 'Goku',
				image: 'goku.png',
				race: 'Saiyan',
				description: 'El hombre más poderoso de la galaxia',
				transformations: [],
			},
			{
				id: 2,
				name: 'Vegeta',
				image: 'vegeta.png',
				race: 'Saiyan',
				description: 'El hombre más poderoso de la galaxia',
				transformations: [],
			},
		]
		const newState = charactersReducer(
			initialState,
			setCharacters(mockCharacters)
		)
		expect(newState.characters).toHaveLength(2)
		expect(newState.characters[0].name).toBe('Goku')
	})

	test('must handle addFavorite without duplicates', () => {
		const character: Character = {
			id: 1,
			name: 'Goku',
			image: 'goku.png',
			race: 'Saiyan',
			description: 'El hombre más poderoso de la galaxia',
			transformations: [],
		}
		let newState = charactersReducer(initialState, addFavorite(character))

		expect(newState.favorites).toHaveLength(1)
		expect(newState.favorites[0]).toEqual(character)

		newState = charactersReducer(newState, addFavorite(character))

		expect(newState.favorites).toHaveLength(1)
	})

	test('must handle removeFavorite', () => {
		const character: Character = {
			id: 1,
			name: 'Goku',
			image: 'goku.png',
			race: 'Saiyan',
			description: 'El hombre más poderoso de la galaxia',
			transformations: [],
		}
		let newState = { ...initialState, favorites: [character] }

		newState = charactersReducer(newState, removeFavorite(1))

		expect(newState.favorites).toHaveLength(0)
	})

	test('removeFavorite should not fail if the character is not in favorites', () => {
		const newState = charactersReducer(initialState, removeFavorite(99))
		expect(newState.favorites).toHaveLength(0)
	})
})
