import React, {Component} from 'react'


class Clima extends Component{
    mostrarResultado = () => {
        //obtener los datos de la consulta
        const {name,weather,main} = this.props.resultado;
        if(!name || !weather || !main) return null; 
        const kelvin = 273.15
        const urlIcon = `http://openweathermap.org/img/wn/${weather.[0].icon}.png`

        return(
            <div className="content_main_clima" >
                <div className="content_clima">
                    <h2 className="text_main_clima">{name}</h2>
                    <p className="text_temperatura">
                        Actual: {(main.temp - kelvin).toFixed(2)} &deg;C
                        <img  src={urlIcon} alt="`clima de ${name}`" />
                    </p><br />
                    <p className="text_temperatura">
                        Max. {(main.temp_max - kelvin).toFixed(2)}  &deg;C
                    </p><br />
                    <p className="text_temperatura">
                        Min. {(main.temp_min - kelvin).toFixed(2)}  &deg;C
                    </p>
                </div>
            </div>
        )
    }
    render(){
        return(
            <div className="container">
                {this.mostrarResultado()}
            </div>
        )
    }
}

export default Clima;