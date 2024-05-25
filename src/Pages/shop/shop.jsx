import React from 'react'
import { PRODUCTS } from '../../Products'
import ProductData from './ProductData'

const Shop = () => {
  return (
    <>
      {
        PRODUCTS.map((product) => (
          <ProductData data={product} key={product.id} />
        ))
      }
    </>
  )
}

export default Shop;