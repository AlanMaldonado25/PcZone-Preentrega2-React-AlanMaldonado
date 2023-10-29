import React from 'react'
import {Link} from 'react-router-dom';
import './Item.css'


const Item = ({item}) => {
    return (
            <div className='container ItemContainer'>
                <div className="card">
                    <img src={item.img} alt={item.name} className='cardImg'/>
                    <div className="card-body text-center">
                        <p className='cardText'>{item.name}</p>
                        <p className='cardPrecio'>${item.precio_actual}</p>
                    </div>
                    <Link to={'/item/' + item.id}className='text-decoration-none'>
                        <button className='cardBtn'>Ver Mas</button>
                    </Link>
                </div>
            </div>
        
    )
}

export default Item
