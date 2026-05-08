import type { CartItem } from "../../../types/CartItem"

import {
	getCart,
	increaseQuantity,
	decreaseQuantity,
	removeFromCart
} from "../../../utils/cart"

import { navigate } from "../../../utils/navigate"

import {
	initializeTheme,
	toggleTheme
} from "../../../utils/theme"

const cartContainer =
	document.getElementById("cart") as HTMLDivElement

const totalContainer =
	document.getElementById("total") as HTMLHeadingElement

const backStore =
	document.getElementById("backStore") as HTMLButtonElement

backStore.addEventListener("click", () => {
	navigate("/src/pages/store/home/home.html")
})

const renderCart = () => {
	const cart = getCart()

	cartContainer.innerHTML = ""

	if (cart.length === 0) {
		cartContainer.innerHTML = `
			<p>El carrito está vacío</p>
		`

		totalContainer.textContent = ""

		return
	}

	let total = 0

	cart.forEach((item: CartItem) => {
		total += item.product.precio * item.quantity

		const div = document.createElement("div")

		div.classList.add("card")
		div.classList.add("cart-item")

		div.innerHTML = `
	<img
		src="/assets/${item.product.imagen}"
		alt="${item.product.nombre}"
		style="
			width:120px;
			height:120px;
			object-fit:cover;
			border-radius:12px
		"
	>

	<div class="cart-info">

		<h3>${item.product.nombre}</h3>

		<p>
			Precio unitario:
			$${item.product.precio}
		</p>

		<p>
			Subtotal:
			$${item.product.precio * item.quantity}
		</p>

	</div>

	<div class="cart-actions">

		<div class="quantity-container">

			<button
				class="
					quantity-btn
					decrease-btn
					btn-secondary
				"
				data-id="${item.product.id}"
			>
				-
			</button>

			<span class="quantity-display">
				${item.quantity}
			</span>

			<button
				class="
					quantity-btn
					increase-btn
					btn-primary
				"
				data-id="${item.product.id}"
			>
				+
			</button>

		</div>

		<button
			class="btn-danger remove-btn"
			data-id="${item.product.id}"
		>
			Quitar
		</button>

	</div>
`

		cartContainer.appendChild(div)
	})

	totalContainer.textContent = `Total: $${total}`

	// Agregar event listeners después de renderizar todos los items
	const increaseButtons =
		document.querySelectorAll(".increase-btn")

	increaseButtons.forEach(button => {
		// Remover event listeners anteriores para evitar duplicados
		button.removeEventListener("click", () => {})
		button.addEventListener("click", () => {
			const id = Number(
				(button as HTMLButtonElement)
				.dataset.id
			)
			increaseQuantity(id)
			renderCart()
		})
	})

	const decreaseButtons =
		document.querySelectorAll(".decrease-btn")

	decreaseButtons.forEach(button => {
		button.removeEventListener("click", () => {})
		button.addEventListener("click", () => {
			const id = Number(
				(button as HTMLButtonElement)
				.dataset.id
			)
			decreaseQuantity(id)
			renderCart()
		})
	})

	const removeButtons =
		document.querySelectorAll(".remove-btn")

	removeButtons.forEach(button => {
		button.removeEventListener("click", () => {})
		button.addEventListener("click", () => {
			const id = Number(
				(button as HTMLButtonElement)
				.dataset.id
			)
			removeFromCart(id)
			renderCart()
		})
	})
}

const darkModeButton =
	document.createElement("button")

darkModeButton.textContent =
	"🌙 Dark Mode"

darkModeButton.classList.add("btn-secondary")

const navbar =
	document.querySelector(".navbar")

navbar?.appendChild(darkModeButton)

initializeTheme()

darkModeButton.addEventListener("click", () => {

	toggleTheme()
})

renderCart()