import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'

const prismaClientSingleton = () => {
    const connectionString = process.env.DATABASE_URL
    const isProduction = process.env.NODE_ENV === 'production'

    if (!connectionString) {
        throw new Error("ERROR: DATABASE_URL is missing. Please check Vercel settings.")
    }

    const protocol = connectionString.split(':')[0]
    if (protocol === 'prisma+postgres') {
        throw new Error("ERROR: 'prisma+postgres://' is not supported by adapter-pg. Use 'postgres://' for Supabase.")
    }

    const pool = new pg.Pool({
        connectionString,
        ssl: { rejectUnauthorized: false }
    })
    const adapter = new PrismaPg(pool)
    return new PrismaClient({ adapter })
}

declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
