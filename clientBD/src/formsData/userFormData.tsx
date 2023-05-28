export type UserLogInFormData = {
    id: number
    userName: string
    fullName: string
    password: string
    isArtist: boolean
}

export type UserRegisterFormData = {
    userName: string
    fullName: string
    password: string
    isArtist: boolean
}

export type UserDeleteFormData = {
    id: number
}