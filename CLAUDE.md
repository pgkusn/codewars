# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Run tests**: `npm test` (starts Vitest in watch mode)
- **Run tests with UI**: `npm run test:ui` (launches Vitest UI)
- **Run tests with coverage**: `npm run test:coverage`
- **Start main application**: `npm start` (runs main.js, though no main.js exists currently)

## Project Architecture

This is a **code kata practice repository** containing algorithmic challenges and solutions, primarily from Codewars. The project structure is:

- **`src/codewars/`** & **`src/leetcode/`**: Contains individual problem folders
- Each problem has its own directory (e.g., `src/codewars/operArray/`)
- **`index.ts`**: Standalone solution file
- **`index.spec.ts`**: Corresponding test file using the standard Vitest globals
- **`README.md`**: Problem description and instructions (often in Trad. Chinese)

## Testing Framework

- Uses **Vitest** as the testing framework with global test functions enabled
- Tests use `describe()` and `it()` blocks following standard testing patterns
- TypeScript is configured with strict mode and vitest globals support, no manual import required
- Test files import functions directly from their corresponding implementation files

## Key Conventions

- **Language**: TypeScript with ES modules (`"type": "module"` in package.json)
- **Testing**: Each kata solution should have a corresponding `.spec.ts` file
- **Dependencies**: Uses lodash and ramda for utility functions
- **Code Style**: Functions are exported individually, allowing for selective imports
- **File Organization**: One problem per directory, with `index.ts`, `index.spec.ts`, and `README.md`

## Development Notes

- The project is configured for ES modules with TypeScript
- Vitest runs with globals enabled, so `describe`, `it`, and `expect` are available without imports
- Each kata solution is self-contained and can be run independently
