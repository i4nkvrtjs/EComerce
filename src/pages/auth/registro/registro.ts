import type { IUser } from "../../../types/IUser"

import {
	getUsers,
	saveUsers
} from "../../../utils/localStorage"

import { navigate } from "../../../utils/navigate"

const form =
	document.getElementById("form") as HTMLFormElement

const inputEmail =
	document.getElementById("email") as HTMLInputElement

const inputPassword =
	document.getElementById("password") as HTMLInputElement

form.addEventListener("submit", (e: SubmitEvent) => {
	e.preventDefault()

	const email = inputEmail.value.trim()
	const password = inputPassword.value.trim()

	const users = getUsers()

	const existingUser = users.find(
		u => u.email === email
	)

	if (existingUser) {
		alert("El usuario ya existe")
		return
	}

	const newUser: IUser = {
		email,
		password,

		role: "client",

		loggedIn: false
	}

	users.push(newUser)

	saveUsers(users)

	alert("Usuario registrado correctamente")

	navigate("/src/pages/auth/login/login.html")
})