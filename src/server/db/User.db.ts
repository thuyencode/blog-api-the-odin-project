import type { User } from '@prisma/client'
import prisma from './client'

const findByUsername = async (username: string): Promise<User | null> =>
  await prisma.user.findUnique({ where: { username } })

const updateByUsername = async (
  username: string,
  data: Partial<Omit<User, 'username' | 'salted_hash'>>
): Promise<User | null> =>
  await prisma.user.update({ where: { username }, data })

const UserDB = {
  findByUsername,
  updateByUsername
}

export default UserDB
