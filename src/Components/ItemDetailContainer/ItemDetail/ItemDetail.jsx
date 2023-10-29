import React, { useState } from 'react'
import './ItemDetail.css';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
    const [contador, setContador] = useState(0);
    
    return (
        <div className='itemDetail'>
            <div className="itemBody">
                <img src={item.img} alt={item.name} className='itemImg' />
                <h2 className='itemName'>{item.name}</h2>
                <p className='itemPrecio'>${item.precio_actual}</p>
                <p className='itemStock'>Disponible: {item.stock}</p>
                <div className='agregarCantidad'>
                <button onClick={() => contador > 0 && setContador(contador - 1)} className='btnAccion'> - </button>
                    <h3 className='contador'>{contador}</h3>
                    <button onClick={() => contador < item.stock && setContador(contador + 1)} className='btnAccion'> + </button>
                </div>
                <div>
                    <button onClick={() => alert('Proximamente...')}>Comprar</button>
                </div>
                <div className='btnVolver'>
                    <span><Link as={Link} to="/" className='btnVolver'>Volver</Link></span>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
