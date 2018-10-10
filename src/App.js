import React from 'react';
import AppStyle from './AppStyle';
import Relogio from './Componentes/Relogio/Relogio';
import Controles from './Componentes/Controles/Controles';

class App extends React.Component {
  render(){
    return (
      <div style={AppStyle.divDeFora}>
        <h1 style={AppStyle.titulo}>Temporizador React</h1>
        <div>
          <Relogio />
          <Controles />
        </div>
      </div>
    );
  }
}

export default App;
