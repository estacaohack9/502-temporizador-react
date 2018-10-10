import React from 'react';
import RelogioStyle from './RelogioStyle';

class Relogio extends React.Component {
  render(){
    let minutos = this.props.minutos;
    let segundos = this.props.segundos;

    if(this.props.minutos < 10){
      minutos = '0' + minutos;
    }

    if(this.props.segundos < 10){
      segundos = '0' + segundos;
    }

    return (
      <div style={RelogioStyle.relogio}>{`${minutos}:${segundos}`}</div>
    );
  }
}

export default Relogio;