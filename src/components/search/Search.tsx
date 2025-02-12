import styles from './Search.module.css'
import { useEffect } from 'react'
import { useCharacters } from '../../hooks/useCharacters'
import { RootState } from '../../store'
import { setCharacters, setSearchTerm } from '../../store/charactersSlice'
import { useDebounce } from '../../hooks/useDebounce'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { useFavoritesContext } from '../layout/FavoritesContext'

export const Search = () => {
	const dispatch = useAppDispatch()
	const searchTerm = useAppSelector(
		(state: RootState) => state.characters.searchTerm
	)
	const { disableFavorites, showFavorites } = useFavoritesContext()

	const favorites = useAppSelector(
		(state: RootState) => state.characters.favorites
	)

	const debouncedSearchTerm = useDebounce(searchTerm, 500)

	const { data } = useCharacters(debouncedSearchTerm)

	useEffect(() => {
		if (data) {
			dispatch(setCharacters(data))
		}
	}, [data, dispatch])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearchTerm(e.target.value))
		if (showFavorites) disableFavorites()
	}

	const results = data?.length || 0
	return (
		<div className={styles.main}>
			<div className={styles.inputWrapper}>
				<i className="fa-solid fa-magnifying-glass"></i>
				<input
					className={styles.inputSearch}
					type="text"
					placeholder="Search for a character"
					value={searchTerm}
					onChange={handleChange}
				/>
			</div>

			<div className={styles.searchCount}>
				{showFavorites ? favorites.length : results} results
			</div>
		</div>
	)
}
