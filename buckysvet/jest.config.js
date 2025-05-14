module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/tests/registro.spec.ts', 
    '**/tests/medicamento.spec.ts'
  ],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: 'tsconfig.json'
    }]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  testTimeout: 600000, // 10 minutos de timeout para las pruebas
  verbose: true,
  detectOpenHandles: true,
  forceExit: true,
  maxWorkers: 1 // Ejecutar pruebas secuencialmente para evitar conflictos de datos si comparten estado
}; 