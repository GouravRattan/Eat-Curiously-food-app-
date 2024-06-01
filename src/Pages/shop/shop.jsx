import React from 'react'
import { PRODUCTS } from '../../Products'
import ProductData from './ProductData'
import Marquee from '../../Components/Marquee'

const Shop = () => {
  return (
    <>
      {
        PRODUCTS.map((product) => (
          <ProductData data={product} key={product.id} />
        ))
      }
      <Marquee />
    </>
  )
}

export default Shop;