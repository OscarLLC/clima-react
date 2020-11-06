import React  from 'react'


const Error = (props) => {
    return(
        <div className="content_main_error">
            <div className="content_error">
                <h4 className="text_error">{props.mensaje}</h4>
            </div>
        </div>
        
    )
}

export default Error;