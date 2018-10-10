import React from 'react';
import ControlesStyle from './ControlesStyle';
import Botao from '../Botao/Botao';

class Controles extends React.Component {
  render(){
    return (
      <div style={ControlesStyle.controles}>
        <div>
          <Botao clique={this.props.menos} conteudo="-"/>
          <Botao clique={this.props.mais} conteudo="+"/>
        </div>
        <div>
          <Botao conteudo="Iniciar"/>
          <Botao clique={this.props.zerar} conteudo="Zerar"/>
          <Botao conteudo="Registrar"/>
        </div>
      </div>
    );
  }
}

export default Controles;