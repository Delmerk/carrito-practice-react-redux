import React from "react";
import styled from "styled-components";
import { connect } from "react-redux"; //conectarnos al estado global

const Productos = ({ productos, agregarProductoAlCarrito }) => {
	return (
		<div>
			<h3>Productos</h3>
			<ContenedorProductos>
				{productos.map((producto, index) => {
					return (
						<Producto key={index}>
							<p>{producto.nombre}</p>
							<Boton
								onClick={() =>
									agregarProductoAlCarrito(producto.id, producto.nombre)
								}
							>
								Agregar al carrito
							</Boton>
						</Producto>
					);
				})}
			</ContenedorProductos>
		</div>
	);
};

const ContenedorProductos = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 20px;
	padding: 20px 0;
`;

const Producto = styled.div`
	padding: 20px;
	border: 1px solid #ebeef3;
	border-radius: 5px;
	text-align: center;

	p {
		margin-bottom: 10px;
		font-weight: bold;
	}
`;

const Boton = styled.button`
	border: none;
	background: #086e11;
	color: #fff;
	font-size: 12px;
	font-family: "Open Sans", sans-serif;
	text-align: center;
	display: inline-block;
	padding: 10px 20px;
	cursor: pointer;
	width: 100%;
	border-radius: 3px;
	transition: 0.3s ease all;

	&:hover {
		background: #129606;
	}
`;

// mapear el estado lobal y pasarlo a props
// nos tiene que devolver un objeto con las props que queremos conectarle al componente Productos
const mapStateToProps = (estado) => {
	return {
		productos: estado.productos,
	};
};

// dispatch es un valor que vamos a ejecutar para opder ejecutar la acción
const mapDispatchToProps = (dispatch) => {
	return {
		agregarProductoAlCarrito: (idProductoAAgregar, nombre) => {
			dispatch({
				type: "AGREGAR_PRODUCTO_AL_CARRITO",
				idProductoAAgregar: idProductoAAgregar,
				nombre: nombre,
			});
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Productos);
