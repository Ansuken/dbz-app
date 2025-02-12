import { useQuery } from '@tanstack/react-query'
import { fetchCharacterById } from '../api/fetchCharacters'
import { Character } from '../types/Character'

export const useCharacterById = (id?: string) => {
	return useQuery<Character>({
		queryKey: ['characters', id],
		queryFn: () => fetchCharacterById(id),
		staleTime: 86400000,
		enabled: id !== undefined,
	})
}
