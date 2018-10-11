import React from 'react';
import RegistrosStyle from './RegistrosStyle';

class Registros extends React.Component {
  render(){
    return (
      <div>
        <h2>Registros de tempo:</h2>
        <div>
          {this.props.tempos.map((item, indice) => {
            return(
              <p key={indice} style={RegistrosStyle.tempos}>{item}</p>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Registros;
