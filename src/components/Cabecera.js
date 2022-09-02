import React from 'react';

// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

export default function Cabecera(props) {
	return (
		<header>
			{/* maquetar Cabecera aquí */}
			<h1>Carrito de compras</h1>
			<p>
				{/*Aquí se muestra la cantidad de productos que hay en el contador*/}
				Cantidad de productos
				<span className='contador'>{props.cantidad}</span>
			</p>
		</header>
	);
}
