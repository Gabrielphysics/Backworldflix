import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';



function CadastroCategoria(){
    return(
      <PageDefault>
       <h1 className="oi">Cadastro de Categoria</h1>
       <Link to="/">
         Ir para Home

       </Link>
      </PageDefault>
    );
}

export default CadastroCategoria;