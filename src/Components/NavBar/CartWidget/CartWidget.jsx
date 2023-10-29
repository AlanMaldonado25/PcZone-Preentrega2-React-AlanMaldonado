import React from 'react'
import { BiCartAlt } from "react-icons/bi";
import './CArtWidget.css'
const CartWidget = () => {
    return (
        <div className='cartContainer'>
            <a href='#' className='btn-cart'>
                <BiCartAlt className='cart'/>
                <span>1</span>
            </a>
        </div>
    )
}

export default CartWidget
