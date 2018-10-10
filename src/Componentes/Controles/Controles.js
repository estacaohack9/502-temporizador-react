import React from 'react';
import ControlesStyle from './ControlesStyle';
import Botao from '../Botao/Botao';

class Controles extends React.Component {
  render(){
    return (
      <div style={ControlesStyle.controles}>
        <div>
          <Botao conteudo="-"/>
          <Botao conteudo="+"/>
        </div>
        <div>
          <Botao conteudo="Iniciar"/>
          <Botao conteudo="Zerar"/>
          <Botao conteudo="Registrar"/>
        </div>
      </div>
    );
  }
}

export default Controles;