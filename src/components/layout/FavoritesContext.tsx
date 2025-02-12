import { createContext, useContext, useState, ReactNode } from 'react'

type FavoritesContextProps = {
	showFavorites: boolean
	enableFavorites: () => void
	disableFavorites: () => void
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(
	undefined
)

export const useFavoritesContext = () => {
	const context = useContext(FavoritesContext)
	if (!context) {
		throw new Error(
			'useFavoritesContext debe usarse dentro de FavoritesProvider'
		)
	}
	return context
}

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
	const [showFavorites, setShowFavorites] = useState(false)

	const enableFavorites = () => setShowFavorites(true)

	const disableFavorites = () => setShowFavorites(false)

	return (
		<FavoritesContext.Provider
			value={{ showFavorites, enableFavorites, disableFavorites }}>
			{children}
		</FavoritesContext.Provider>
	)
}
