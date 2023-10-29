import React from 'react'
import { useParams } from 'react-router-dom';
import {useState,useEffect} from 'react';
import ItemDetail from '../ItemDetailContainer/ItemDetail/ItemDetail';
import arrayProductos from '../Json/Products.json'
import Spinner from 'react-bootstrap/Spinner';

const ItemDetailContainer = () => {
    const [item,setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id}= useParams();
    useEffect(()=>{
        const promesa = new Promise((resolve)=>{
            setTimeout(() => {
                resolve(arrayProductos.find(item=> item.id === parseInt(id)))
            }, 2000);
        });
        promesa.then((data)=>{
            setItem(data)
            setLoading(false)
        })
    },[id])

    return (
        <div>
            {loading ? <Spinner animation="border" variant="primary" /> : <ItemDetail item={item}/>};
        </div>
    )
}

export default ItemDetailContainer
