import Link from 'next/link'

export function Navbar() {
	return (
		<header className="border-b border-neutral-800">
			<nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
				<Link href="/" className="text-lg font-bold">FiveM</Link>
				<div className="flex items-center gap-4 text-sm text-neutral-300">
					<Link href="/rules" className="hover:text-white">Kurallar</Link>
					<Link href="/contact" className="hover:text-white">İletişim</Link>
					<a href={process.env.NEXT_PUBLIC_TEBEX_URL ?? '#'} target="_blank" className="rounded bg-emerald-600 px-3 py-1.5 text-white hover:bg-emerald-500">Mağaza</a>
				</div>
			</nav>
		</header>
	)
}
