import { Route, Routes } from 'react-router-dom'
import { CollectionView, CharacterDetail } from '../views'

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<CollectionView />} />
				<Route path="/:id" element={<CharacterDetail />} />
			</Routes>
		</>
	)
}
