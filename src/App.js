import React from 'react';
import AppStyle from './AppStyle';

class App extends React.Component {
  render(){
    return (
      <div style={AppStyle.divDeFora}>
        <h1 style={AppStyle.titulo}>Temporizador React</h1>
        <div>
          <div style={AppStyle.relogio}>00:00</div>
          <div style={AppStyle.botoes}>
            <div>
              <button style={AppStyle.botao}>+</button>
              <button style={AppStyle.botao}>-</button>
            </div>
            <div>
              <button style={AppStyle.botao}>Iniciar</button>
              <button style={AppStyle.botao}>Zerar</button>
              <button style={AppStyle.botao}>Registrar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
