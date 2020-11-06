import React from 'react'


const Header = (props) => {
    return(
        <header className="content_header">
            <p className="text_heaader">{props.title}</p>
        </header>
    )
}

export default Header