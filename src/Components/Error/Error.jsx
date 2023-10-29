import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'
const Error = () => {
    return (
        <div className='error404'>
            <p>Esta pagina todavia no esta disponible</p>
            <Link as={Link} to="/" className='Navlink'><button>Volver</button></Link>
        </div>
    )
}

export default Error
