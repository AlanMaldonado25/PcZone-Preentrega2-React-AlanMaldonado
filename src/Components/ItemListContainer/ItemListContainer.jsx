import React from 'react'
import { useState,useEffect } from 'react'
import arrayProductos from '../Json/Products.json'
import ItemList from './ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'


const ItemListContainer = () => {
    const [item,setItem] = useState([]);
    const {id}= useParams();
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const data = await new Promise((resolve)=>{
                    setTimeout(()=>{
                        resolve( id ? arrayProductos.filter((item) => item.categoria === id) : arrayProductos)
                        },500);
                });
                setItem(data);
            }catch(error){
                console.log('error',error)
            }
        };
        fetchData();
    },[id])


    return (
        <div className='ItemListContainer'>
            <div className="row">

            <ItemList item={item}/>

            </div>
        </div>
    )
}

export default ItemListContainer
