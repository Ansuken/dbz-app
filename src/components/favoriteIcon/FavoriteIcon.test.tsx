import '@testing-library/jest-dom'
import { Character } from '../../types/Character'
import { isFavorite } from '../../helpers/favoriteUtils'

describe('FavoriteIcon logic', () => {
	const character: Character = {
		id: 1,
		name: 'Rick Sanchez',
		image: 'rick.png',
		race: 'human',
		description: 'El hombre más poderoso de la galaxia',
		transformations: [],
	}

	const anotherCharacter: Character = {
		id: 2,
		name: 'Morty Smith',
		image: 'morty.png',
		race: 'human',
		description: 'El hombre más poderoso de la galaxia',
		transformations: [],
	}

	describe('isFavorite function', () => {
		it('should return the character when it is in favorites', () => {
			const favorites = [character, anotherCharacter]
			expect(isFavorite(character, favorites)).toEqual(character)
		})

		it('should return undefined when the character is not in favorites', () => {
			const favorites = [anotherCharacter]
			expect(isFavorite(character, favorites)).toBeUndefined()
		})
	})
})
