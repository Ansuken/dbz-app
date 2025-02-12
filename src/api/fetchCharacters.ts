import axios from 'axios'
import { Character } from '../types/Character'

const API_URL = 'https://dragonball-api.com/api/characters'

type queryParams = {
	name?: string
	race?: string
}

export const fetchCharacters = async ({
	params,
}: {
	params: queryParams
}): Promise<Character[]> => {
	const response = await axios.get(API_URL, {
		params: {
			...params,
			limit: 50,
		},
	})

	return params.race || params.name ? response.data : response.data.items
}

export const fetchCharacterById = async (id?: string): Promise<Character> => {
	const url = `${API_URL}/${id}`
	const response = await axios.get(url)

	return response.data
}
