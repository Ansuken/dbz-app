import styles from './CharacterResume.module.css'
import { Character } from '../../types/Character'
import { FavoriteIcon } from '../favoriteIcon/FavoriteIcon'
import { imageStyle, replaceSpacesUrl } from '../../helpers/thumbnailUtils'

export const CharacterResume = ({ character }: { character: Character }) => {
	if (!character) return null
	return (
		<div className={styles.main}>
			<div
				className={styles.characterPhoto}
				style={{
					...imageStyle,
					backgroundImage: `url(${replaceSpacesUrl(character.image)})`,
				}}></div>
			<div className={styles.characterInfo}>
				<div className={styles.characterTitle}>
					<div className={styles.characterName}>{character.name}</div>
					<FavoriteIcon character={character} />
				</div>
				{character.description}
			</div>
		</div>
	)
}
