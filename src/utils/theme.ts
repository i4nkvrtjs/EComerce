const THEME_KEY = "darkMode"

export const initializeTheme = () => {

	const isDark =
		localStorage.getItem(THEME_KEY)

	if (isDark === "true") {

		document.body.classList.add("dark")
	}
}

export const toggleTheme = () => {

	document.body.classList.toggle("dark")

	const isDark =
		document.body.classList.contains("dark")

	localStorage.setItem(
		THEME_KEY,
		String(isDark)
	)
}