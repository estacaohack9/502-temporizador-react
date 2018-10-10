import React from 'react';
import BotaoStyle from './BotaoStyle';

class Botao extends React.Component {
  render(){
    return (
      <button style={BotaoStyle.botao}>+</button>
    );
  }
}

export default Botao;
