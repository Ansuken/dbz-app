import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { RelatedCharacters } from './RelatedCharacters'
import { useCharactersByRace } from '../../hooks/useCharactersByRace'
import { BrowserRouter } from 'react-router-dom'

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockNavigate,
}))

jest.mock('../../hooks/useCharactersByRace', () => ({
	useCharactersByRace: jest.fn(),
}))

describe('RelatedCharacters Component', () => {
	beforeEach(() => {
		jest.clearAllMocks()
	})

	test('Shows the list of related characters', () => {
		;(useCharactersByRace as jest.Mock).mockReturnValue({
			data: [
				{ id: 2, name: 'Vegeta', image: 'vegeta.png' },
				{ id: 3, name: 'Broly', image: 'broly.png' },
			],
		})

		render(
			<BrowserRouter>
				<RelatedCharacters race="Saiyan" />
			</BrowserRouter>
		)

		expect(screen.getByText('Related by race')).toBeInTheDocument()
		expect(screen.getByText('Vegeta')).toBeInTheDocument()
		expect(screen.getByText('Broly')).toBeInTheDocument()
	})
})
