import React from 'react';
import BotaoStyle from './BotaoStyle';

class Botao extends React.Component {
  render(){
    return (
      <button onClick={this.props.clique} style={BotaoStyle.botao}>{this.props.conteudo || "Botão"}</button>
    );
  }
}

export default Botao;
