import { getLayout } from '@vercel/examples-ui'
import '@vercel/examples-ui/globals.css'
import type { LayoutProps } from '@vercel/examples-ui/layout'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
	const Layout = getLayout<LayoutProps>(Component)

	return (
		<Layout title="Monorepo" path="solutions/monorepo">
			<Component {...pageProps} />
		</Layout>
	)
}
