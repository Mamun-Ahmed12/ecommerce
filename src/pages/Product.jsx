import React, { useContext } from 'react'
// import all_product from './../component/assets/image/all_product';
import { ShopContext } from '../component/context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../component/Breadcrums/Breadcrum';
import ProductDisplay from '../component/productDisplay/ProductDisplay';
import all_product from '../assets/images/all_product'

const Product = () => {
const {all_product} = useContext(ShopContext);
const {productId} = useParams();
const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
   <Breadcrum product={product}/>
   <ProductDisplay product={product}/>
   <ProductDisplay/>
      
    </div>
  )
}

export default Product