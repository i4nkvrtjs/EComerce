import {
	getUsers,
	saveUser
} from "../../../utils/localStorage"

import { navigate } from "../../../utils/navigate"

const form = document.getElementById("form") as HTMLFormElement

const inputEmail = document.getElementById("email") as HTMLInputElement

const inputPassword = document.getElementById("password") as HTMLInputElement

const goRegister = document.getElementById("goRegister") as HTMLButtonElement

// navegación a registro
goRegister.addEventListener("click", () => {
	navigate("/src/pages/auth/registro/registro.html")
})

form.addEventListener("submit", (e: SubmitEvent) => {
	e.preventDefault()

	const email = inputEmail.value.trim()
	const password = inputPassword.value.trim()

	const users = getUsers()

	const user = users.find(u =>
		u.email === email &&
		u.password === password
	)

	if (!user) {
		alert("Email o contraseña incorrectos")
		return
	}

	// guardar sesión
	saveUser({
		...user,
		loggedIn: true
	})

	// redirección según rol
	if (user.role === "admin") {
		navigate("/src/pages/admin/home/home.html")
	}
	else {
		navigate("/src/pages/store/home/home.html")
	}
})