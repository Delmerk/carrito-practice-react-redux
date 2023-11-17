import React from "react";
import styled from "styled-components";
import { NavLink, Routes, Route } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import Blog from "./componentes/Blog";
import Tienda from "./componentes/Tienda";
import Error404 from "./componentes/Error404";
import Carrito from "./componentes/Carrito";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/tiendaReducer";

function App() {
	// const App = () => {
	// Sin REDUX:
	/*const productos = [
		{
			id: 1,
			name: "Chocolate",
			price: 3000,
		},
		{
			id: 2,
			name: "Leche",
			price: 5000,
		},
		{
			id: 3,
			name: "Laptop",
			price: 3000000,
		},
		{
			id: 4,
			name: "Celular",
			price: 1000000,
		},
	];

	const [carrito, setCarrito] = useState([]);

	const agregarProductoAlCarrito = (idProductoAAgregar, nombre) => {
		// Si el carrito no tiene elementos agragamos 1
		if (carrito.length === 0) {
			setCarrito([{ id: idProductoAAgregar, name: nombre, cantidad: 1 }]);
		} else {
			// Revizar que el carrito no tenga ya el producto que queremos agregar
			// Si ya tiene el producto entonces queremos actualizar el valor
			// Si no tiene el producto entonces lo agregamos

			// Para poder editar el carrito-arreglo tenemos que clonarlo
			const nuevoCarrito = [...carrito]; //lo clonamos

			// Comprobar si el carrito ya tiene el ID del producto a agregar
			// O comprobar si el elemento que queremos agregar yaEstaEnCarrito o no
			const yaEstaEnCarrito = //Guarda el valor de verdadero o falso si el product ya se encuentra en elcarrito
				// filter recorre cada uno de elementos del arreglo-carrito
				nuevoCarrito.filter((productoDeCarrito) => {
					return productoDeCarrito.id === idProductoAAgregar;
				}).length > 0;

			// Si ya tiene el producto, lo podemos-tenemos que actualizar
			if (yaEstaEnCarrito) {
				// Debos saber cual de los elementos del arreglo, de nuestro carrito es
				// Para ello tenemos que buscarlo, obtener su posición en el arreglo.
				// Y en base a su posición ya actualizamos el valor.
				// forEach ejecuta una function por cada element
				nuevoCarrito.forEach((productoDeCarrito, index) => {
					if (productoDeCarrito.id === idProductoAAgregar) {
						const cantidad = nuevoCarrito[index].cantidad;
						nuevoCarrito[index] = {
							id: idProductoAAgregar,
							name: nombre,
							cantidad: cantidad + 1,
						};
					}
				});
			} else {
				//De otra forma agregamos el producto al carrito
				nuevoCarrito.push({
					id: idProductoAAgregar,
					name: nombre,
					cantidad: 1,
				});
			}

			// Por ultimo actualizamos el carrito
			setCarrito(nuevoCarrito);
		}
	};*/
	// Sin REDUX end.

	const store = createStore(reducer);
	// console.log(store.getState());

	return (
		<Provider store={store}>
			<Contenedor>
				<Menu>
					<NavLink to="/">Inicio</NavLink>
					<NavLink to="/blog">Blog</NavLink>
					<NavLink to="/tienda">Tienda</NavLink>
				</Menu>
				<main>
					<Routes>
						<Route path="/" exact={true} element={<Inicio />} />
						<Route path="/blog" element={<Blog />} />
						<Route path="/tienda" element={<Tienda />} />
						<Route element={<Error404 />} />
					</Routes>
				</main>
				<aside>
					<Carrito />
				</aside>
			</Contenedor>
		</Provider>
	);
}

const Contenedor = styled.div`
	max-width: 1000px;
	padding: 40px;
	width: 90%;
	display: grid;
	gap: 20px;
	grid-template-columns: 2fr 1fr;
	background: #fff;
	margin: 40px 0;
	border-radius: 10px;
	box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
	width: 100%;
	text-align: center;
	background: #092c4c;
	grid-column: span 2;
	border-radius: 3px;

	a {
		color: #fff;
		display: inline-block;
		padding: 15px 20px;
	}

	a:hover {
		background: #1d85e8;
		text-decoration: none;
	}
`;

export default App;
