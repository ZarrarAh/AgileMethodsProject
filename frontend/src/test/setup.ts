import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Skjul console.log og console.error under tester
vi.spyOn(console, 'log').mockImplementation(() => {})
vi.spyOn(console, 'error').mockImplementation(() => {})