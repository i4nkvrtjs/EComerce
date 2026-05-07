import type { IUser } from "../types/IUser"

const USERS_KEY = "users"
const USER_KEY = "userData"

// usuarios registrados
export const getUsers = (): IUser[] => {
	const users = localStorage.getItem(USERS_KEY)

	return users ? JSON.parse(users) : []
}

export const saveUsers = (users: IUser[]) => {
	localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

// usuario logueado
export const saveUser = (user: IUser) => {
	localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export const getUSer = () => {
	return localStorage.getItem(USER_KEY)
}

export const removeUser = () => {
	localStorage.removeItem(USER_KEY)
}