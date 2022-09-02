// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la define el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0, "agotado" si llega a 0)

import { useState } from 'react';

export default function Item({ item, changeCantidad }) {

	const [stock, changeStock] = useState(item.stock);
	
	const handleClick = () => {
		changeStock(stock - 1);
		changeCantidad();
	};
	
	return (
		<>
			{/* maquetar Item aquí */}
			<div key={item.id} className='producto'>
				<h3>{item.producto.nombre}</h3>
				<img alt='img' src={item.producto.imagen} />
				<p>{item.producto.descripcion}</p>
				<h5>
					📝En stock: {stock > 0 ? stock : <span> agotado😩</span>}
				</h5>
				<button
					className='stock'
					disabled={stock === 0}
					onClick={handleClick}>
					{stock > 0 ? <span>comprar</span> : <span>sin stock</span>}
				</button>
			</div>
		</>
	);
}
