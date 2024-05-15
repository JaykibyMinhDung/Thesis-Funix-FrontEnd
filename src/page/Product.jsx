import React from 'react'
import Producthd from '../components/Producthd'
import { useParams } from 'react-router-dom'
import all_products from '../assets/all_products'
import ProductDisplay from '../components/ProductDisplay'
import ProductDescription from '../components/ProductDescription'
import PopularProducts from '../components/PopularProducts'

const Product = () => {
  const {productId} = useParams()

  const product = all_products.find(e => e.id === Number(productId))

  if (!product) {
    return <div>Product not found!</div>
  }

  return (
    <div>
      <Producthd product={product} />
      <ProductDisplay product={product} />
      <ProductDescription />
      <PopularProducts />
    </div>
  )
}

export default Product