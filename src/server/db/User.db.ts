import type { User } from '@prisma/client'
import prisma from './client'

const findByUsername = async (username: string): Promise<User | null> =>
  await prisma.user.findUnique({ where: { username } })

const UserDB = {
  findByUsername
}

export default UserDB
