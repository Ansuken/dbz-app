import styles from './RelatedCharacters.module.css'
import Thumbnails from '../../common/styles/Thumbnails.module.css'
import { Character } from '../../types/Character'
import { useCharactersByRace } from '../../hooks/useCharactersByRace'
import { useNavigate } from 'react-router-dom'
import { imageStyle, replaceSpacesUrl } from '../../helpers/thumbnailUtils'

export const RelatedCharacters = ({ race }: { race: Character['race'] }) => {
	const { data } = useCharactersByRace(race)
	const navigate = useNavigate()

	return (
		<div className={styles.main}>
			<div className={Thumbnails.thumbnailTitle}>Related by race</div>
			<div className={Thumbnails.thumbnailList}>
				{data &&
					data.map((character: Character) => {
						return (
							<div
								key={character.id}
								className={Thumbnails.thumbnailCharacter}
								onClick={() => navigate(`/${character.id}`)}>
								<div
									style={{
										...imageStyle,
										backgroundImage: `url(${replaceSpacesUrl(character.image)})`,
									}}
									className={Thumbnails.thumbnailCharacterImage}></div>
								<div className={Thumbnails.thumbnailCharacterName}>
									{character.name}
								</div>
							</div>
						)
					})}
			</div>
		</div>
	)
}
