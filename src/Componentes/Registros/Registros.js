import React from 'react';
import RegistrosStyle from './RegistrosStyle';

class Registros extends React.Component {
  render(){
    return (
      <div>
        <h2>Registros de tempo:</h2>
        <div>
          <p style={RegistrosStyle.tempos}>00:00</p>
          <p style={RegistrosStyle.tempos}>00:00</p>
        </div>
      </div>
    );
  }
}

export default Registros;
