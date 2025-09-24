import { NextResponse } from 'next/server'

type ServerStatus = {
	online: boolean
	players: number
	maxPlayers: number
	map?: string
	resources?: number
}

async function fetchFiveMStatus(host: string): Promise<ServerStatus> {
	try {
		const response = await fetch(`http://${host}/info.json`, { cache: 'no-store' })
		if (!response.ok) throw new Error('status failed')
		const info = await response.json()
		const playersRes = await fetch(`http://${host}/players.json`, { cache: 'no-store' })
		const players = playersRes.ok ? (await playersRes.json()) as Array<unknown> : []
		return {
			online: true,
			players: Array.isArray(players) ? players.length : 0,
			maxPlayers: Number(info?.vars?.sv_maxClients ?? 0) || 0,
			map: info?.vars?.mapname,
			resources: Array.isArray(info?.resources) ? info.resources.length : undefined
		}
	} catch {
		return { online: false, players: 0, maxPlayers: 0 }
	}
}

export async function GET() {
	const host = process.env.FIVEM_HOST ?? '127.0.0.1:30120'
	const data = await fetchFiveMStatus(host)
	return NextResponse.json(data, { headers: { 'Cache-Control': 'no-store' } })
}
