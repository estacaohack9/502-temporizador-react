import React from 'react';
import ControlesStyle from './ControlesStyle';

class Controles extends React.Component {
  render(){
    return (
      <div style={ControlesStyle.controles}>
        <div>
          <button style={ControlesStyle.botao}>+</button>
          <button style={ControlesStyle.botao}>-</button>
        </div>
        <div>
          <button style={ControlesStyle.botao}>Iniciar</button>
          <button style={ControlesStyle.botao}>Zerar</button>
          <button style={ControlesStyle.botao}>Registrar</button>
        </div>
      </div>
    );
  }
}

export default Controles;