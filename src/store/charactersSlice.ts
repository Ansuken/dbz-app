import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Character } from '../types/Character'

export interface CharactersState {
	searchTerm: string
	characters: Character[]
	favorites: Character[]
}

const initialState: CharactersState = {
	searchTerm: '',
	characters: [],
	favorites: [],
}

const charactersSlice = createSlice({
	name: 'characters',
	initialState,
	reducers: {
		setSearchTerm: (state, action: PayloadAction<string>) => {
			state.searchTerm = action.payload
		},
		setCharacters: (state, action: PayloadAction<Character[]>) => {
			state.characters = action.payload
		},
		addFavorite: (state, action: PayloadAction<Character>) => {
			if (!state.favorites.some((fav) => fav.id === action.payload.id)) {
				state.favorites.push(action.payload)
			}
		},
		removeFavorite: (state, action: PayloadAction<number>) => {
			state.favorites = state.favorites.filter(
				(fav) => fav.id !== action.payload
			)
		},
	},
})

export const { setSearchTerm, setCharacters, addFavorite, removeFavorite } =
	charactersSlice.actions
export default charactersSlice.reducer
