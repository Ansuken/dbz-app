import styles from './CharacterDetail.module.css'
import { useParams } from 'react-router-dom'
import { CharacterResume } from '../../components/characterResume/CharacterResume'
import { RelatedCharacters } from '../../components/relatedCharacters/RelatedCharacters'
import { useCharacterById } from '../../hooks/useCharacterById'
import { Transformations } from '../../components/transformations/Transformations'

export const CharacterDetail = () => {
	const { id } = useParams()
	const { data } = useCharacterById(id)

	if (!data) return null

	return (
		<div className={styles.main}>
			<CharacterResume character={data} />
			<div className={styles.moreInfo}>
				{data.transformations?.length > 0 && (
					<Transformations transformations={data.transformations} />
				)}
				{data.race && <RelatedCharacters race={data.race} />}
			</div>
		</div>
	)
}
