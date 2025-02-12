import type { Config } from 'jest'

const config: Config = {
	preset: 'ts-jest',
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
	transform: {
		'^.+\\.(ts|tsx)$': [
			'ts-jest',
			{
				tsconfig: '<rootDir>/tsconfig.app.json', // Configuración de `ts-jest` directamente en `transform`
			},
		],
	},
	moduleNameMapper: {
		'\\.(css|scss|sass|less)$': 'identity-obj-proxy',
		'\\.(svg|png|jpg|jpeg|gif|webp|avif|ico|bmp|tiff)$':
			'<rootDir>/__mocks__/fileMock.js',
	},
}

export default config
