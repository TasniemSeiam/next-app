import React from "react";
import Link from "next/link";
import { fetchAllProducts } from "@/lib/getAll";
import CardProduct from "./CardProduct";
import ScrollToTop from "@/components/scrollToTop";
const Blog = async () => {

  const products = await fetchAllProducts();
  

  return (
    <div className="container">
      <h2 className=" text-gray-600 text-3xl mt-5  border-b-2 border-gray-300 pb-2" >All Products</h2>
     
      <div className="  flex flex-row flex-wrap gap-4 my-4 ">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product._id}>
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
};

export default Blog;
