'use client'

import { NextUIProvider } from '@nextui-org/react'
import type { ReactNode } from 'react'

export function AppProvider(props: AppProviderProps) {
	const { children, className } = props

	return (
		<NextUIProvider className={className} validationBehavior="native">
			{children}
		</NextUIProvider>
	)
}

interface AppProviderProps {
	children: ReactNode
	className?: string
}
