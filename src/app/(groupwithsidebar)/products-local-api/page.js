import Link from 'next/link';
import React from 'react'
import CardProduct from '../home-mongoose/CardProduct';
import ScrollToTop from '@/components/scrollToTop';

const ProductsAPI = async () => {
  const response = await fetch("http://localhost:3000/api/products");
  if (response.status === 404) {
    return notFound()
  }
  const products = await response.json();
  return (
    <div className="container">
      <h2 className=" text-gray-600 text-3xl mt-5  border-b-2 border-gray-300 pb-2" >All Products from my API</h2>
     
      <div className="  flex flex-row flex-wrap gap-4 my-4 ">
        {products.map((product) => (
          <Link href={`/products-local-api/${product.id}`} key={product._id}>
            <CardProduct
              id={product.id}
              title={product.title}
              body={product.description}
              image={product.thumbnail}
            />
          </Link>
        ))}
      </div>
      <ScrollToTop/>
    </div>
  );
}

export default ProductsAPI