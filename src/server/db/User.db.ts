import type { User } from '@prisma/client'
import prisma from './client'

const findByUsername = async (username: string): Promise<User | null> =>
  await prisma.user.findUnique({ where: { username } })

const updateByUsername = async (
  username: string,
  data: Partial<Omit<User, 'username' | 'salted_hash'>>
): Promise<User | null> =>
  await prisma.user.update({ where: { username }, data })

type InsertNewUserProps = Pick<User, 'username' | 'salted_hash'>

const insert = async (data: InsertNewUserProps): Promise<User> =>
  await prisma.user.create({ data })

const UserDB = {
  findByUsername,
  updateByUsername,
  insert
}

export default UserDB
