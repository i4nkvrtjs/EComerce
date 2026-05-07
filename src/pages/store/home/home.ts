import { PRODUCTS, getCategories } from "../../../utils/data"
import { addToCart } from "../../../utils/cart"
import { checkAuhtUser } from "../../../utils/auth"
import { navigate } from "../../../utils/navigate"

checkAuhtUser(
	"/src/pages/auth/login/login.html",
	"/src/pages/client/home/home.html",
	"client"
)

const productsContainer = document.getElementById("products")!
const searchInput = document.getElementById("search") as HTMLInputElement
const categoriesContainer = document.getElementById("categories")!

let currentCategory: number | "all" = "all"

function renderProducts(list = PRODUCTS) {
	productsContainer.innerHTML = ""

	if (list.length === 0) {
		productsContainer.innerHTML = "<p>No hay resultados</p>"
		return
	}

	list.forEach(p => {
		const div = document.createElement("div")
		div.classList.add("card")
		div.classList.add("product-card")
		
		div.innerHTML = `
			<h3>${p.nombre}</h3>
			<p>$${p.precio}</p>
			<p>${p.descripcion}</p>
			<button ${!p.disponible ? "disabled" : ""}>
				${p.disponible ? "Agregar" : "Sin stock"}
			</button>
		`

		if (p.disponible) {
			div.querySelector("button")!.addEventListener("click", () => {
				addToCart(p)
				alert("Agregado al carrito")
			})
		}

		productsContainer.appendChild(div)
	})
}

function filterProducts() {
	const text = searchInput.value.toLowerCase()

	let filtered = PRODUCTS.filter(p =>
		p.nombre.toLowerCase().includes(text)
	)

	if (currentCategory !== "all") {
		filtered = filtered.filter(p =>
			p.categorias.some(c => c.id === currentCategory)
		)
	}

	renderProducts(filtered)
}

function renderCategories() {
	const categories = getCategories()

	const allBtn = document.createElement("button")
	allBtn.textContent = "Todos"
	allBtn.addEventListener("click", () => {
		currentCategory = "all"
		filterProducts()
	})
	categoriesContainer.appendChild(allBtn)

	categories.forEach(cat => {
		const btn = document.createElement("button")
		btn.textContent = cat.nombre

		btn.addEventListener("click", () => {
			currentCategory = cat.id
			filterProducts()
		})

		categoriesContainer.appendChild(btn)
	})
}

searchInput.addEventListener("input", filterProducts)

document.getElementById("goCart")?.addEventListener("click", () => {
	navigate("/src/pages/store/cart/cart.html")
})

renderCategories()
renderProducts()