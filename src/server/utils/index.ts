export const getUserNotFoundMessage = (username: string): string =>
  `Username '${username}' not found`

export const getUserExistedMessage = (username: string): string =>
  `User with username '${username}' already existed`
