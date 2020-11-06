import '../css/App.css';
import Header from './Header'
import Form from './Form';
import { Component } from 'react';
import Error from './Error';
import Clima from './Clima'

class App extends Component {

  //agregar el state al error
  state = {
    error: '',
    consulta: {},
    resultado: {}
  }

componentDidUpdate(prevProps, prevState){
  if(prevState.consulta !== this.state.consulta){
    this.consultaApi();
  }
}

  componentDidMount(){
    this.setState({
      error: false
    })
  }

  consultaApi = () =>{
    const {ciudad, pais} = this.state.consulta
    if(!ciudad || !pais) return null;

    const appId = '35da5f04a128a1dec07d7fb966bbfb9b';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

    //query con fetch api
    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(datos =>{
        this.setState({
          resultado: datos
        })
      })
      .catch(error =>{
      })
  } 

  datosConsulta = respuesta =>{
    if(respuesta.ciudad === '' || respuesta.pais === ''){
      this.setState({
        error: true
      })
    }else{
      this.setState({
        consulta:  respuesta,
        error: false
      })
    }
  }


  render(){

    const error = this.state.error;
    let resultado;
    if(error){
      resultado = <Error mensaje ="Ambos campos son obligatorios" />
    }else{
      resultado = <Clima resultado = {this.state.resultado} />
    }

    return (
      <div className="App">
        <Header 
          title = "CLIMA REACT"
        />
        <div className="content_main_app">
          <Form 
            datosConsulta = {this.datosConsulta}
          />
          {resultado}
        </div>
      </div>
    );
  }
}

export default App;
