import { User } from "@prisma/client"

export type CreateUserDTO = Omit<User, "id">

export type UpdateUserDTO = User