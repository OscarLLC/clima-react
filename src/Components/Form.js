import React, {Component} from 'react'


class Form extends Component{

    //crear los refs
    ciudadRef = React.createRef();
    paisRef = React.createRef();

    buscarClima = (e) =>{
        //prevenir el default
        e.preventDefault();
        
        //leer los refs y crear el objeto
        const respuesta = {
            ciudad : this.ciudadRef.current.value,
            pais : this.paisRef.current.value
        }

        //pasar por props
        this.props.datosConsulta(respuesta)
    }

    

    render(){
        return(
            <div className="content_form">
                <div className="content_dates">
                    <form onSubmit={this.buscarClima} className="form">
                        <div className="content_input">
                            <div className="date">
                                <label className="label">Ciudad:</label>
                                <input ref={this.ciudadRef} className="input" type="text" />
                            </div>
                            <div className="date">
                                <label className="label">Pais:</label>
                                <select ref={this.paisRef} className="select">
                                    <option value="" defaultValue>Elige un pais</option>
                                    <option value="AR">Argentina</option>
                                    <option value="CO">Colombia</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="ME">Mexico</option>
                                    <option value="ES">España</option>
                                    <option value="EE.UU">EE.UU</option>
                                    <option value="BR">Brasil</option>
                                    <option value="PE">Peru</option>
                                    <option value="EC">Ecuador</option>
                                    <option value="BO">Bolivia</option>
                                </select>
                            </div>
                        </div>
                        <div className="content_botton">
                            <input className="button" type="submit" value="BUSCAR..." />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;


//http://api.openweathermap.org/data/2.5/weather?q=Colombia&appid=35da5f04a128a1dec07d7fb966bbfb9b