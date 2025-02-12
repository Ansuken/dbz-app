import styles from './Layout.module.css'
import { ReactNode } from 'react'
import { Header } from '../header/Header'
import { FavoritesProvider } from './FavoritesContext'

export const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<FavoritesProvider>
			<div className={styles.layout}>
				<Header />
				{children}
			</div>
		</FavoritesProvider>
	)
}
