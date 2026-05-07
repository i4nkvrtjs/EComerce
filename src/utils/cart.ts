import type { Product } from "../types/Product"
import type { CartItem } from "../types/CartItem"

const CART_KEY = "cart"

export const getCart = (): CartItem[] => {
	const cart = localStorage.getItem(CART_KEY)

	return cart ? JSON.parse(cart) : []
}

export const saveCart = (cart: CartItem[]) => {
	localStorage.setItem(CART_KEY, JSON.stringify(cart))
}

export const addToCart = (product: Product) => {
	const cart = getCart()

	const existingItem = cart.find(
		item => item.product.id === product.id
	)

	if (existingItem) {
		existingItem.quantity++
	}
	else {
		cart.push({
			product,
			quantity: 1
		})
	}

	saveCart(cart)
}

export const increaseQuantity = (productId: number) => {
	const cart = getCart()

	const item = cart.find(
		item => item.product.id === productId
	)

	if (!item) return

	item.quantity++

	saveCart(cart)
}

export const decreaseQuantity = (productId: number) => {
	let cart = getCart()

	const item = cart.find(
		item => item.product.id === productId
	)

	if (!item) return

	item.quantity--

	if (item.quantity === 0) {
		cart = cart.filter(item => item.product.id !== productId)
	}

	saveCart(cart)
}

export const removeFromCart = (productId: number) => {
	const cart = getCart().filter(
		item => item.product.id !== productId
	)

	saveCart(cart)
}