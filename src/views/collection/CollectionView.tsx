import styles from './CollectionView.module.css'
import { Search } from '../../components/search/Search'
import { Card } from '../../components/card/Card'
import { RootState } from '../../store'
import { useAppSelector } from '../../hooks/hooks'
import { useFavoritesContext } from '../../components/layout/FavoritesContext'
import Common from '../../common/styles/Common.module.css'
import { mergeClasses } from '../../helpers/StyleUtils'

export const CollectionView = () => {
	const { showFavorites } = useFavoritesContext()
	const characters = useAppSelector((state: RootState) =>
		showFavorites ? state.characters.favorites : state.characters.characters
	)

	return (
		<div className={styles.main}>
			{showFavorites && (
				<div className={mergeClasses(Common.title, styles.favTitle)}>
					Favorites
				</div>
			)}
			<Search />
			{
				<div className={styles.collection}>
					{characters.length === 0 && <p>No se encontraron resultados.</p>}
					{characters &&
						characters.length > 0 &&
						characters.map((character) => {
							return <Card key={character.id} character={character} />
						})}
				</div>
			}
		</div>
	)
}
