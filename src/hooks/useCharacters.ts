import { useQuery } from '@tanstack/react-query'
import { fetchCharacters } from '../api/fetchCharacters'
import { Character } from '../types/Character'

export const useCharacters = (name?: string) => {
	const params = { name }
	return useQuery<Character[]>({
		queryKey: ['characters', name],
		queryFn: () => fetchCharacters({ params }),
		staleTime: 86400000,
		enabled: name !== undefined,
	})
}
