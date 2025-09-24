import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'FiveM Server',
	description: 'FiveM sunucunuz için modern web sitesi'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="tr">
			<body className="min-h-screen bg-neutral-950 text-neutral-100">
				{children}
			</body>
		</html>
	)
}
