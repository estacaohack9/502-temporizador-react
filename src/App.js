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
      segundos: 0,
      parado: true,
      registros: []
    };
    this.intervalo = 0;
  }

  registrar = () => {
    if(this.state.minutos || this.state.segundos){
      let minutos = this.state.minutos;
      let segundos = this.state.segundos;

      if(this.state.minutos < 10){
        minutos = '0' + minutos;
      }

      if(this.state.segundos < 10){
        segundos = '0' + segundos;
      }

      let novosRegistros = this.state.registros;
      novosRegistros.push(`${minutos}:${segundos}`);

      this.setState({
        registros: novosRegistros
      });
    }
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
      segundos:0,
      registros: []
    });
  }

  parar = () => {
    clearInterval(this.intervalo);
    this.setState({
      parado: true
    });
  }

  iniciar = () => {
    this.intervalo = setInterval(()=>{
      if(!this.state.minutos && !this.state.segundos){
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
    }, 1000);
    this.setState({
      parado: false
    });
  }



  // componentDidMount(){
  //   fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Potato').then(
  //     resposta => resposta.json()
  //   ).then(
  //     dados => {
  //       let lista = []
  //       for (let meal of dados.meals){
  //         lista.push(meal.strMeal);
  //       }
  //       this.setState({
  //         registros: lista
  //       });
  //     }
  //   ).catch(erro => console.log(`ERRO: ${erro}`));
  // }

  render(){
    const funcoes = {
      iniciar: this.iniciar,
      parar: this.parar,
      mais: this.mais,
      menos: this.menos,
      zerar: this.zerar,
      registrar: this.registrar
    }

    return (
      <div style={AppStyle.divDeFora}>
        <h1 style={AppStyle.titulo}>Temporizador React</h1>
        <div>
          <Relogio minutos={this.state.minutos} segundos={this.state.segundos}/>
          <Controles parado={this.state.parado} funcoes={funcoes}/>
        </div>
        <Registros tempos={this.state.registros}/>
      </div>
    );
  }
}

export default App;
