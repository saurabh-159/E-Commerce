import axios from './axios'
import React, { createContext, useState, useEffect } from 'react'

// Create context
export const ProductContext = createContext()

function ContextProvider(props) {
  const [product, setProduct] = useState(null)

  // Function to fetch products
  const getProducts = async () => {
    try {
      const { data } = await axios("/products")
     setProduct(data)
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect to call getProducts on component mount
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <ProductContext.Provider value={[product, setProduct]}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ContextProvider


// bbb