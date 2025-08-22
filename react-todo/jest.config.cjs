/** @type {import('jest').Config} */
module.exports = {
	// Use jsdom for React component tests
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
	moduleNameMapper: {
		// Mock CSS modules and assets
		'^.+\\.(css|less|scss|sass)$': 'identity-obj-proxy',
		'^.+\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
	},
	testMatch: ['**/__tests__/**/*.?(m)[jt]s?(x)'],
	transform: {
		'^.+\\.[jt]sx?$': ['babel-jest', { presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]] }],
	},
};


