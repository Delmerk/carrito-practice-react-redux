import React from "react";
import styled from "styled-components";
import { NavLink, Routes, Route } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import Blog from "./componentes/Blog";
import Tienda from "./componentes/Tienda";
import Error404 from "./componentes/Error404";
import Carrito from "./componentes/Carrito";
import { Provider } from "react-redux";
import { createStore } from "redux"; //una funtion
import reducer from "./reducers/tiendaReducer";

function App() {
	// reducer es una funtion encargada de manipular-editar el estado.
	const store = createStore(reducer);
	// console.log(store.getState());

	return (
		// store es nuestro estado global con redux
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
	background: #144c09;
	grid-column: span 2;
	border-radius: 3px;

	a {
		color: #fff;
		display: inline-block;
		padding: 15px 20px;
	}

	a:hover {
		background: #177a03;
		text-decoration: none;
	}
`;

export default App;
