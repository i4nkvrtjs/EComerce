import type { IUser } from "./types/IUser"

import { getUsers, saveUsers } from "./utils/localStorage"

function initializeAdmin() {
	const users = getUsers()

	const adminExists = users.some(
		u => u.role === "admin"
	)

	if (adminExists) return

	const adminUser: IUser = {
		email: "admin@admin.com",
		password: "admin",
		role: "admin",
		loggedIn: false
	}

	users.push(adminUser)

	saveUsers(users)

	console.log("Admin creado correctamente")
}

initializeAdmin()

window.location.href = "/src/pages/auth/login/login.html"