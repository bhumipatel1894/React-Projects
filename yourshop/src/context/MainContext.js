"use client"
import {createContext, useState, useEffect} from 'react'

 export let globalContext = createContext()

 export default function MainContext({children}) {

    
    let [cart, setCart] = useState([]);

     useEffect(() => {
    const storedCart = localStorage.getItem("CART");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    } else{
        setCart([]);
    }
  }, []);


     return (

    <globalContext.Provider value={{cart, setCart}}>
        {children}
    </globalContext.Provider>
     )

  }