import React from 'react';
import ControlesStyle from './ControlesStyle';
import Botao from '../Botao/Botao';

class Controles extends React.Component {
  render(){
    return (
      <div style={ControlesStyle.controles}>
        <div>
          <Botao />
          <Botao />
        </div>
        <div>
          <Botao />
          <Botao />
          <Botao />
        </div>
      </div>
    );
  }
}

export default Controles;