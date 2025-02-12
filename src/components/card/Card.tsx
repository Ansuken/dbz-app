import styles from './Card.module.css'
import { Character } from '../../types/Character'
import { useNavigate } from 'react-router-dom'
import { FavoriteIcon } from '../favoriteIcon/FavoriteIcon'
import { replaceSpacesUrl, imageStyle } from '../../helpers/thumbnailUtils'

export const Card = ({ character }: { character: Character }) => {
	const navigate = useNavigate()

	const handleCardClick = () => {
		void navigate(`/${character.id}`)
	}

	return (
		<div className={styles.main} onClick={handleCardClick}>
			<div
				className={styles.image}
				style={{
					...imageStyle,
					backgroundImage: `url(${replaceSpacesUrl(character.image)})`,
				}}></div>
			<div className={styles.cardFooter}>
				<div className={styles.redOverlay}></div>
				<div className={styles.footerTextWrapper}>
					<div className={styles.footerText}>{character.name}</div>
					<div className={styles.footerFav}>
						<FavoriteIcon className={styles.fav} character={character} />
					</div>
				</div>
			</div>
		</div>
	)
}
