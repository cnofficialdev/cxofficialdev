import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import GitHub from 'next-auth/providers/github'
import { prisma } from '@/lib/prisma'

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut
} = NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		GitHub({
			clientId: process.env.GITHUB_ID ?? '',
			clientSecret: process.env.GITHUB_SECRET ?? ''
		})
	],
	trustHost: true,
	secret: process.env.AUTH_SECRET,
	session: { strategy: 'jwt' }
})
