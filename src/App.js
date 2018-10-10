import React from 'react';
import AppStyle from './AppStyle';
import Relogio from './Componentes/Relogio/Relogio';
import Controles from './Componentes/Controles/Controles';
import Registros from './Componentes/Registros/Registros';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      minutos: 0,
      segundos: 0
    };
    this.intervalo = 0;
  }

  mais = () => {
    this.setState({
      minutos: this.state.minutos + 1
    });
  }

  menos = () => {
    if(this.state.minutos > 0){
      this.setState({
        minutos: this.state.minutos - 1
      });
    }
  }

  zerar = () => {
    this.setState({
      minutos: 0,
      segundos:0
    });
  }

  parar = () => {
    clearInterval(this.intervalo);
  }

  iniciar = () => {
    this.intervalo = setInterval(()=>{
      if(this.state.minutos === 0 && this.state.segundos === 0){
        this.parar();
        return;
      }

      let segundosAtual = this.state.segundos - 1;
      let minutosAtual = this.state.minutos;
      if(segundosAtual < 0){
        segundosAtual = 59;
        minutosAtual--;
      }
      this.setState({
        segundos: segundosAtual,
        minutos: minutosAtual
      });
    }, 1000)
  }

  render(){
    return (
      <div style={AppStyle.divDeFora}>
        <h1 style={AppStyle.titulo}>Temporizador React</h1>
        <div>
          <Relogio minutos={this.state.minutos} segundos={this.state.segundos}/>
          <Controles iniciar={this.iniciar} zerar={this.zerar} mais={this.mais} menos={this.menos}/>
        </div>
        <Registros />
      </div>
    );
  }
}

export default App;
