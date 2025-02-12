import { render } from '@testing-library/react'
import { CharacterResume } from './CharacterResume'
import { Provider } from 'react-redux'
import { store } from '../../store'

test('render correctly the character resume', () => {
	const character = {
		id: 1,
		name: 'Rick Sanchez',
		image: 'rick.png',
		description: 'El hombre más poderoso de la galaxia',
		race: 'humano',
		transformations: [],
	}

	const { container } = render(
		<Provider store={store}>
			<CharacterResume character={character} />
		</Provider>
	)
	expect(container).toMatchSnapshot()
})
