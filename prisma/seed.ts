import { PrismaClient, CategoryType } from './generated/client'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'
import bcrypt from 'bcryptjs'

const adapter = new PrismaBetterSqlite3({ url: 'dev.db' })
const prisma = new PrismaClient({ adapter })

async function main() {
    console.log('Seeding data...')

    // 1. Create Test User
    const passwordHash = await bcrypt.hash('secret123', 10);
    const testUser = await prisma.user.upsert({
        where: { email: 'test@fortiarent.mx' },
        update: {},
        create: {
            name: 'Usuario Test',
            email: 'test@fortiarent.mx',
            passwordHash,
        }
    });
    console.log('Test user created:', testUser.email);

    const requirements = [
        // ARRENDADOR
        { id: 101, category: CategoryType.ARRENDADOR, name: 'Identificación oficial vigente', description: 'Copia vigente con fotografía y firma (INE, Pasaporte o Cédula)', isRequired: true },
        { id: 102, category: CategoryType.ARRENDADOR, name: 'Última boleta de predial pagada', description: 'Del inmueble que se va a arrendar', isRequired: true },

        // ARRENDATARIO
        { id: 201, category: CategoryType.ARRENDATARIO, name: 'Formato de solicitud de póliza', description: 'Debidamente llenado', isRequired: true },
        { id: 202, category: CategoryType.ARRENDATARIO, name: 'Identificación oficial vigente', description: 'Copia vigente con fotografía y firma (INE, Pasaporte o Cédula)', isRequired: true },
        { id: 203, category: CategoryType.ARRENDATARIO, name: 'Forma Migratoria (Extranjeros)', description: 'En caso de extranjeros: Forma Migratoria (FM)', isRequired: false },
        { id: 204, category: CategoryType.ARRENDATARIO, name: '6 últimos comprobantes de ingreso', description: 'Recibos de nómina', isRequired: true },
        { id: 205, category: CategoryType.ARRENDATARIO, name: 'Carta laboral de la empresa', description: 'Debe incluir: Nombre, Antigüedad, Puesto, Sueldo, NSS', isRequired: true },
        { id: 206, category: CategoryType.ARRENDATARIO, name: '3 últimos estados de cuenta bancarios', description: 'De los últimos 3 meses', isRequired: true },

        // SOLIDARIO_SIN
        { id: 301, category: CategoryType.SOLIDARIO_SIN, name: 'Identificación oficial vigente', description: 'Copia vigente con fotografía y firma', isRequired: true },
        { id: 302, category: CategoryType.SOLIDARIO_SIN, name: 'Comprobante de domicilio', description: 'Vigencia menor a 3 meses', isRequired: true },
        { id: 303, category: CategoryType.SOLIDARIO_SIN, name: '3 últimos estados de cuenta bancarios', description: 'Completos de los últimos 3 meses', isRequired: true },

        // SOLIDARIO_CON
        { id: 401, category: CategoryType.SOLIDARIO_CON, name: 'Identificación oficial fiador(es)', description: 'Copia vigente del/los fiador(es)', isRequired: true },
        { id: 402, category: CategoryType.SOLIDARIO_CON, name: 'Escritura pública del inmueble', description: 'Copia de la escritura del inmueble en garantía', isRequired: true },
        { id: 403, category: CategoryType.SOLIDARIO_CON, name: 'Última boleta de predial pagada', description: 'Del inmueble en garantía', isRequired: true },
        { id: 404, category: CategoryType.SOLIDARIO_CON, name: 'Comprobante de domicilio', description: 'Vigencia menor a 3 meses', isRequired: true },
        { id: 405, category: CategoryType.SOLIDARIO_CON, name: 'Acta de matrimonio', description: 'En caso de aplicar', isRequired: false },

        // EMPRESA
        { id: 501, category: CategoryType.EMPRESA, name: 'Copia del Acta Constitutiva', description: 'Documento legal de creación', isRequired: true },
        { id: 502, category: CategoryType.EMPRESA, name: 'Poder Notarial', description: 'Del representante legal', isRequired: true },
        { id: 503, category: CategoryType.EMPRESA, name: 'Cédula Fiscal (RFC)', description: 'Documento oficial SAT', isRequired: true },
        { id: 504, category: CategoryType.EMPRESA, name: 'Constancia de Situación Fiscal', description: 'Actualizada', isRequired: true },
        { id: 505, category: CategoryType.EMPRESA, name: 'Identificación representante legal', description: 'Vigente con fotografía y firma', isRequired: true },
        { id: 506, category: CategoryType.EMPRESA, name: 'Comprobante de domicilio', description: 'Vigencia menor a 3 meses', isRequired: true },
        { id: 507, category: CategoryType.EMPRESA, name: '3 últimos estados de cuenta bancarios', description: 'Relativos a la empresa', isRequired: true },
        { id: 508, category: CategoryType.EMPRESA, name: 'Última declaración anual', description: 'Declaración anual de la empresa', isRequired: true },
    ]

    for (const req of requirements) {
        await prisma.documentRequirement.upsert({
            where: { id: req.id },
            update: req,
            create: req,
        })
    }

    console.log('Requirements seeded successfully.')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
