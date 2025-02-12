import { Transformation } from '../../types/Character'
import Thumbnails from '../../common/styles/Thumbnails.module.css'
import styles from './Transformations.module.css'
import Common from '../../common/styles/Common.module.css'
import { imageStyle, replaceSpacesUrl } from '../../helpers/thumbnailUtils'

export const Transformations = ({
	transformations,
}: {
	transformations: Transformation[]
}) => {
	return (
		<div className={styles.main}>
			<div className={Common.title}>Transformations</div>
			<div className={Thumbnails.thumbnailList}>
				{transformations?.map((transformation: Transformation) => {
					return (
						<div
							key={transformation.id}
							className={Thumbnails.thumbnailCharacter}>
							<div
								style={{
									...imageStyle,
									backgroundImage: `url(${replaceSpacesUrl(transformation.image)})`,
								}}
								className={Thumbnails.thumbnailCharacterImage}></div>
							<div className={Thumbnails.thumbnailCharacterName}>
								{transformation.name}
								<div className={Thumbnails.thumbnailCharacterKi}>
									{transformation.ki}
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
