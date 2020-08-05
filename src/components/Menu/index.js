import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../../assets/img/LOGO.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={LOGO} alt="back world logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo!
      </Button>
    </nav>
  );
}

export default Menu;
