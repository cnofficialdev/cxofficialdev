export default function ContactPage() {
	return (
		<main className="mx-auto max-w-xl p-6 space-y-4">
			<h1 className="text-3xl font-semibold">İletişim</h1>
			<p className="text-neutral-300">Sorularınız için Discord sunucumuza katılın veya e-posta gönderin.</p>
			<div className="space-y-2">
				<a className="text-sky-400 hover:underline" href={process.env.NEXT_PUBLIC_DISCORD_INVITE ?? '#'} target="_blank">Discord</a>
				<div>E-posta: <a className="text-sky-400 hover:underline" href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'info@example.com'}`}>{process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'info@example.com'}</a></div>
			</div>
		</main>
	)
}
