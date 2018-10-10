import React from 'react';
import RelogioStyle from './RelogioStyle';

class Relogio extends React.Component {
  render(){
    return (
      <div style={RelogioStyle.relogio}>00:00</div>
    );
  }
}

export default Relogio;