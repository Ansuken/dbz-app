import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Transformations } from './Transformations'
import { Transformation } from '../../types/Character'

jest.mock('../../helpers/thumbnailUtils', () => ({
	replaceSpacesUrl: jest.fn((url) => url),
	imageStyle: { borderRadius: '50%' },
}))

describe('Transformations Component', () => {
	const mockTransformations: Transformation[] = [
		{
			id: 1,
			name: 'Super Saiyan',
			image: 'ssj.png',
			ki: '5000',
		},
		{
			id: 2,
			name: 'Ultra Instinct',
			image: 'ui.png',
			ki: '9999',
		},
	]

	it('should render all provided transformations', () => {
		render(<Transformations transformations={mockTransformations} />)

		mockTransformations.forEach((transformation) => {
			expect(screen.getByText(transformation.name)).toBeInTheDocument()
			expect(screen.getByText(transformation.ki)).toBeInTheDocument()
		})
	})
})
