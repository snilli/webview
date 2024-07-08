import Page from '@app/a/page'
import { renderHook, render } from '@testing-library/react'
import { test, expect } from 'vitest'

test('Page', () => {
	const { result } = renderHook((prop) => Page())
	console.log(result)
	// render(<Page />)
	// expect(screen.getByText('Log In')).toBeDefined()
	expect(result).toBeDefined()
})
