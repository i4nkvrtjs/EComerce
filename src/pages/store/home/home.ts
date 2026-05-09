import type { Product } from "../../../types/Product"

import {
	PRODUCTS,
	getCategories
} from "../../../utils/data"

import { addToCart } from "../../../utils/cart"

import {
	checkAuthUser,
	logout
} from "../../../utils/auth"

import { navigate } from "../../../utils/navigate"

import {
	initializeTheme,
	toggleTheme
} from "../../../utils/theme"

checkAuthUser(
	"/src/pages/auth/login/login.html",

	// si intenta entrar un admin
	"/src/pages/admin/home/home.html",

	"client"
)

const productsContainer = document.getElementById("products") as HTMLDivElement

const searchInput = document.getElementById("search") as HTMLInputElement

const categoriesContainer = document.getElementById("categories") as HTMLDivElement

let currentCategory: number | "all" = "all"

const renderProducts = (products: Product[]) => {

	productsContainer.innerHTML = ""

	products.forEach(product => {

		const card = document.createElement("div")

		card.classList.add("card")
		card.classList.add("product-card")

		card.innerHTML = `
			<img
				src="/assets/${product.imagen}"
				alt="${product.nombre}"
			>

			<h3>${product.nombre}</h3>

			<p>${product.descripcion}</p>

			<p>$${product.precio}</p>

			<button class="btn-primary add-btn">
				Agregar al carrito
			</button>
		`

		const button = card.querySelector(".add-btn") as HTMLButtonElement

		button.addEventListener("click", () => {

			addToCart(product)

			alert("Producto agregado al carrito")
		})

		productsContainer.appendChild(card)
	})
}

function filterProducts() {

	const text =
		searchInput.value.toLowerCase()

	let filtered = PRODUCTS.filter(product =>
		product.nombre
			.toLowerCase()
			.includes(text)
	)

	if (currentCategory !== "all") {

		filtered = filtered.filter(product =>
			product.categorias.some(
				category =>
					category.id === currentCategory
			)
		)
	}

	renderProducts(filtered)
}

function renderCategories() {

	const categories = getCategories()

	categoriesContainer.innerHTML = ""

	const allBtn = document.createElement("button")

	allBtn.textContent = "Todos"

	allBtn.classList.add("btn-secondary")

	allBtn.addEventListener("click", () => {

		currentCategory = "all"

		filterProducts()
	})

	categoriesContainer.appendChild(allBtn)

	categories.forEach(category => {

		const button = document.createElement("button")

		button.textContent = category.nombre

		button.classList.add("btn-secondary")

		button.addEventListener("click", () => {

			currentCategory = category.id

			filterProducts()
		})

		categoriesContainer.appendChild(button)
	})
}

searchInput.addEventListener(
	"input",
	filterProducts
)

const goCartButton = document.getElementById("goCart") as HTMLButtonElement

goCartButton.addEventListener("click", () => {
	navigate("/src/pages/store/cart/cart.html")
})

/* Logout */

const logoutButton = document.getElementById("logoutBtn") as HTMLButtonElement

logoutButton.addEventListener("click", () => {
	logout()
})

/* DARK MODE */

const darkModeButton = document.getElementById("darkModeBtn") as HTMLButtonElement

initializeTheme()

darkModeButton.addEventListener("click", () => {

	toggleTheme()
})

/* INIT */

initializeTheme()

renderCategories()

renderProducts(PRODUCTS)