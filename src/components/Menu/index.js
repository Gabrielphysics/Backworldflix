import React from 'react';
import LOGO from '../../assets/img/LOGO.png';
import './Menu.css'
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu () {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={LOGO} alt="back world logo"/>
                <p>fala ae Rael</p>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo!
            </Button>
        </nav>
    );
}

export default Menu;
