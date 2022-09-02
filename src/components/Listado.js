import React from 'react';
import Registros from './data.json';
import Item from './Item';
// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.
export default function Listado({ changeCantidad }) {
	// Exportar stock a Item para que pueda ser usado por el componente Item.
	// Exportar handleClick a Item para que pueda ser usado por el componente Item.
	// useState es un hook que nos permite crear un estado para un componente.

	return (
		<div className='container'>
			{/* renderizamos los Item aquí */}
			{/* El parametro item contendrá toda la info del JSON */}
			{Registros.map((item) => {
				return (
					// Acá se renderiza cada Item y le pasamos por props el método para aumentar el estado de App.
					<Item
						changeCantidad={changeCantidad}
						item={item}
						key={item.id}
					/>
				);
			})}
		</div>
	);
}
