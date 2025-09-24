import Link from 'next/link'

async function getStatus() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ''}/api/status`, { cache: 'no-store' })
	if (!res.ok) return { online: false, players: 0, maxPlayers: 0 }
	return res.json()
}

export default async function LandingPage() {
	const status = await getStatus()
	return (
		<main className="mx-auto max-w-5xl p-6">
			<section className="flex flex-col items-center gap-4 py-16 text-center">
				<h1 className="text-5xl font-extrabold">FiveM Sunucusu</h1>
				<p className="text-neutral-300">{status.online ? `Online: ${status.players}/${status.maxPlayers}` : 'Sunucu kapalı'}</p>
				<div className="flex gap-3">
					<a className="rounded bg-emerald-600 px-4 py-2 hover:bg-emerald-500" href={process.env.NEXT_PUBLIC_TEBEX_URL ?? '#'} target="_blank">Mağaza</a>
					<Link className="rounded border border-neutral-700 px-4 py-2 hover:bg-neutral-800" href="/rules">Kurallar</Link>
				</div>
			</section>
		</main>
	)
}
