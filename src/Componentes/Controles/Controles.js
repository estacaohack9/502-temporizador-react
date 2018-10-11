import React from 'react';
import ControlesStyle from './ControlesStyle';
import Botao from '../Botao/Botao';

class Controles extends React.Component {
  render(){
    return (
      <div style={ControlesStyle.controles}>
        <div>
          <Botao clique={this.props.funcoes.menos} conteudo="-"/>
          <Botao clique={this.props.funcoes.mais} conteudo="+"/>
        </div>
        <div>
          <Botao clique={this.props.parado ? this.props.funcoes.iniciar : this.props.funcoes.parar} conteudo={this.props.parado ? "Iniciar" : "Parar"}/>
          <Botao clique={this.props.funcoes.zerar} conteudo="Zerar"/>
          <Botao clique={this.props.funcoes.registrar} conteudo="Registrar"/>
        </div>
      </div>
    );
  }
}

export default Controles;