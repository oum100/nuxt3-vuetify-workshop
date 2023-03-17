export interface User {
  id: string
  email: string
  password: string
  roles: string[]
  token: string
}

export type UserWithoutPassword = Omit<User, 'password'>
