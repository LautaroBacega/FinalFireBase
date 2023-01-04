import React, { useEffect, useState } from 'react'
import Item from './Item'
import { doc, getDoc, collection, getDocs } from "firebase/firestore"
import { db } from "../config";

const ItemList = (/* {products} */) => {

  const [item, setItem] = useState()
  const [items, setItems] = useState([])

  useEffect(() => {
    getItemData()
    getItems()
  }, [])

  const getItemData = () => {
    const docRef = doc(db, 'viajes', 'E9rIwHXVXJIQaMCbIIWK')
    getDoc( docRef ).then( snapshot => {
        setItem( { id: snapshot.id, ...snapshot.data()} )
        console.log(snapshot.data());
    })
  }

  const getItems = async () => {
    const collectionRef = collection(db, 'viajes')
    const snapshot = await getDocs( collectionRef )
    setItems( snapshot.docs.map( d => ( { id:d.id, ...d.data() } ) ));
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full p-20 bg-black'>
      {/* {
        products.map(product => <Item key={product.id} {...product}/>)
      } */}

        { items.map( i => <Item key={items.id} {...items}/>) }
    </div>
  )
}

export default ItemList