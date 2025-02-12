import styles from './FavoriteIcon.module.css'
import { HeartFull, HeartEmpty } from '../../common/svgs/Svgs'
import { removeFavorite, addFavorite } from '../../store/charactersSlice'
import { Character } from '../../types/Character'
import { RootState } from '../../store'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { isFavorite } from '../../helpers/favoriteUtils'

export const FavoriteIcon = ({
	character,
	className,
}: {
	character: Character
	className?: string
}) => {
	const dispatch = useAppDispatch()

	const favorites = useAppSelector(
		(state: RootState) => state.characters.favorites
	)

	const handleAddFavorite = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation()
		if (isFavorite(character, favorites)) {
			dispatch(removeFavorite(character.id))
		} else {
			dispatch(addFavorite(character))
		}
	}

	return (
		<div className={styles.main} onClick={handleAddFavorite}>
			{isFavorite(character, favorites) ? (
				<HeartFull className={className} />
			) : (
				<HeartEmpty />
			)}
		</div>
	)
}
