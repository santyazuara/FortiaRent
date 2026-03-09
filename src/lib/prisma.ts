import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'

const prismaClientSingleton = () => {
    const isProduction = process.env.NODE_ENV === 'production'
    const connectionString = process.env.DATABASE_URL

    if (!connectionString) {
        if (isProduction) {
            throw new Error("CRITICAL: DATABASE_URL environment variable is missing in production. Please set it in Vercel settings.")
        }
        // Fallback for local development if not set in .env
        const localFallback = "postgresql://postgres:postgres@localhost:5432/fortiarent?sslmode=disable"
        const pool = new pg.Pool({ connectionString: localFallback })
        const adapter = new PrismaPg(pool)
        return new PrismaClient({ adapter })
    }

    const pool = new pg.Pool({ connectionString })
    const adapter = new PrismaPg(pool)
    return new PrismaClient({ adapter })
}

declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
