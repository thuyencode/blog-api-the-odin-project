import { safeEnv } from '@/server/env'
import { hashPassword } from '@/server/utils/password'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main(): Promise<void> {
  await prisma.user.upsert({
    where: { username: safeEnv.AUTHOR_USERNAME },
    update: {},
    create: {
      username: safeEnv.AUTHOR_USERNAME,
      salted_hash: await hashPassword(safeEnv.AUTHOR_PASSWORD),
      role: 'AUTHOR'
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e: unknown) => {
    console.error(e)

    await prisma.$disconnect()
    process.exit(1)
  })
