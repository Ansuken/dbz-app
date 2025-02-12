import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { CharacterDetail } from './CharacterDetail'
import { useParams } from 'react-router-dom'
import { useCharacterById } from '../../hooks/useCharacterById'
import { Character } from '../../types/Character'

// Mock de los hooks y componentes
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useParams: jest.fn(),
}))

jest.mock('../../hooks/useCharacterById', () => ({
	useCharacterById: jest.fn(),
}))

jest.mock('../../components/characterResume/CharacterResume', () => ({
	CharacterResume: () => <div data-testid="character-resume" />,
}))

jest.mock('../../components/relatedCharacters/RelatedCharacters', () => ({
	RelatedCharacters: () => <div data-testid="related-characters" />,
}))

jest.mock('../../components/transformations/Transformations', () => ({
	Transformations: () => <div data-testid="transformations" />,
}))

describe('CharacterDetail Component', () => {
	const mockCharacter: Character = {
		id: 1,
		name: 'Goku',
		image: 'goku.png',
		race: 'Saiyan',
		description: 'El hombre más poderoso de la galaxia',
		transformations: [
			{
				id: 101,
				name: 'Super Saiyan',
				image: 'ssj.png',
				ki: '5000',
			},
		],
	}

	beforeEach(() => {
		jest.clearAllMocks()
	})

	it('should get the ID from useParams()', () => {
		;(useParams as jest.Mock).mockReturnValue({ id: '1' })
		;(useCharacterById as jest.Mock).mockReturnValue({ data: mockCharacter })

		render(<CharacterDetail />)

		expect(useParams).toHaveBeenCalled()
	})

	it('should not render anything if `useCharacterById` returns `null`', () => {
		;(useParams as jest.Mock).mockReturnValue({ id: '1' })
		;(useCharacterById as jest.Mock).mockReturnValue({ data: null })

		const { container } = render(<CharacterDetail />)

		expect(container.firstChild).toBeNull()
	})

	it('should render `CharacterResume` when there is data', () => {
		;(useParams as jest.Mock).mockReturnValue({ id: '1' })
		;(useCharacterById as jest.Mock).mockReturnValue({ data: mockCharacter })

		render(<CharacterDetail />)

		expect(screen.getByTestId('character-resume')).toBeInTheDocument()
	})

	it('should render `Transformations` if the character has transformations', () => {
		;(useParams as jest.Mock).mockReturnValue({ id: '1' })
		;(useCharacterById as jest.Mock).mockReturnValue({ data: mockCharacter })

		render(<CharacterDetail />)

		expect(screen.getByTestId('transformations')).toBeInTheDocument()
	})

	it('should not render `Transformations` if the character has NO transformations', () => {
		;(useParams as jest.Mock).mockReturnValue({ id: '1' })
		;(useCharacterById as jest.Mock).mockReturnValue({
			data: { ...mockCharacter, transformations: [] },
		})

		render(<CharacterDetail />)

		expect(screen.queryByTestId('transformations')).not.toBeInTheDocument()
	})

	it('should render `RelatedCharacters` whenever there is data', () => {
		;(useParams as jest.Mock).mockReturnValue({ id: '1' })
		;(useCharacterById as jest.Mock).mockReturnValue({ data: mockCharacter })

		render(<CharacterDetail />)

		expect(screen.getByTestId('related-characters')).toBeInTheDocument()
	})
})
