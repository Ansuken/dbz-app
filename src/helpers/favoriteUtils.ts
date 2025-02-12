import { Character } from '../types/Character'

export const isFavorite = (character: Character, favorites: Character[]) => {
	return favorites.find((fav) => fav.id === character.id)
}
