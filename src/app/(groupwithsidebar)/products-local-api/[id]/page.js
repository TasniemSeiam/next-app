// // import { fetchAllProducts } from "@/lib/getAll";
// // import { fetchProductByID } from "@/lib/getProductById";
// import ClientProductPage from "./ClientProductPage";



// export async function generateMetadata({ params }) {
//   const res = await fetch(
//     `http://localhost:3000/api/products/${params.id}`
//   ).then((res) => res.json());

//   return {
//     title: res.title,
//     description: res.description,
//   };
// }

// const ProductPage = async ({ params }) => {
//   const res = await fetch(`http://localhost:3000/api/products/${params.id}`);
//   if (res.status === 404) {
//     return notFound()
//   }
//   const product = await res.json();
//   const response = await fetch("http://localhost:3000/api/products");
//   if (response.status === 404) {
//     return notFound()
//   }
//   const products = await response.json();
//   const productIndex = products.findIndex((p) => p.id === +params.id);

//   const nextProductId =
//     productIndex < products.length - 1 ? products[productIndex + 1].id : null;
//   const prevProductId = productIndex > 0 ? products[productIndex - 1].id : null;

//   return (
//     <div>
//       <ClientProductPage
//         product={product}
//         nextProductId={nextProductId}
//         prevProductId={prevProductId}
//       />
//     </div>
//   );
// };

// export default ProductPage;
