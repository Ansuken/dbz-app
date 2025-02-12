import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { CollectionView, CharacterDetail } from '../views'

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<CollectionView />} />
				<Route path="/:id" element={<CharacterDetail />} />
			</Routes>
			<ToastContainer
				closeOnClick={false}
				theme="dark"
				limit={1}
				pauseOnHover={false}
			/>
		</>
	)
}
