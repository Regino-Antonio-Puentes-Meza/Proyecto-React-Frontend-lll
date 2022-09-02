import React from 'react';
import fb from '../Images/facebook.png';
import tw from '../Images/twitter.png';
import ig from '../Images/instagram.png';
function Footer() {
	return (
		<>
			<footer>
				<div className='redes'>
					<a href='https://www.facebook.com/'>
						<img src={fb} alt='facebook' />
					</a>
					<a href='https://www.twitter.com/'>
						<img src={tw} alt='twitter' />
					</a>
					<a href='https://www.instagram.com/'>
						<img src={ig} alt='instagram' />
					</a>
				</div>
				<div className='terms'>
					<p>Terminos de uso - Política de privacidad</p>
				</div>
				<div className='copy'>
					<p>© 2022 - Todos los derechos reservados</p>
				</div>
			</footer>
		</>
	);
}

export default Footer;
