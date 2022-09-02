// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

import { useState } from 'react';
import Cabecera from './components/Cabecera';
import Listado from './components/Listado';
import Footer from './components/Footer';
function App(props) {
	// Usamos un estado para contabilizar el total de elementos comprados.
	const [cantidad, setCantidad] = useState(0);

	// El método handleClick debe aumentar la cantidad del producto
	function changeCantidad() {
		setCantidad(cantidad + 1);
	}
	return (
		<div className='App'>
			{/* renderizamos los componentes aquí
				el componente Cabecera debe recibir la cantidad de productos que hay en el contador
				el componente Listado debe recibir el método para aumentar el contador
			*/}
			<Cabecera cantidad={cantidad} />
			<Listado changeCantidad={changeCantidad} />
			<Footer />
		</div>
	);
}

export default App;
