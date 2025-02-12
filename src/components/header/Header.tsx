import styles from './Header.module.css'
import { RootState } from '../../store'
import { HeartFull } from '../../common/svgs/Svgs'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/hooks'
import { useFavoritesContext } from '../layout/FavoritesContext'
import logo from '../../assets/logo.png'

export const Header = () => {
	const favorites = useAppSelector(
		(state: RootState) => state.characters.favorites
	)
	const navigate = useNavigate()
	const { enableFavorites, disableFavorites } = useFavoritesContext()
	const handleLogoClick = () => {
		disableFavorites()
		void navigate('/')
	}
	const handleFavoritesClick = () => {
		enableFavorites()
		void navigate('/')
	}
	return (
		<div className={styles.main}>
			<div className={styles.brand} onClick={handleLogoClick}>
				<img src={logo} alt="DBZ Logo" />
			</div>
			<div className={styles.favorites} onClick={handleFavoritesClick}>
				<HeartFull /> {favorites.length}
			</div>
		</div>
	)
}
