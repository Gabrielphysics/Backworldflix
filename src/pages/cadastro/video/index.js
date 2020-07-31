import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';



function CadastroVideo(){
    return(
      <PageDefault>
       <h1 className="oi">Cadastro de video</h1>
       <h1 className="oi">Fala Rael</h1>
       <Link to="/cadastro/categoria">
         Cadastrar Categoria

       </Link>
      </PageDefault>
    );
}

export default CadastroVideo;