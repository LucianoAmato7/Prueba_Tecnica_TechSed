/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'ts-jest',
  testEnvironment: "node",
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Soporte para alias como "@/types"
  },
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};
