import { useQuery } from '@tanstack/react-query'
import { fetchCharacters } from '../api/fetchCharacters'
import { Character } from '../types/Character'

export const useCharactersByRace = (race?: string) => {
	const params = { race }
	return useQuery<Character[]>({
		queryKey: ['characters', race],
		queryFn: () => fetchCharacters({ params }),
		staleTime: 86400000,
		enabled: race !== undefined,
	})
}
