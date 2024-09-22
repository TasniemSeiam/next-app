import { fetchAllProducts } from "@/lib/getAll";
import { fetchProductByID } from "@/lib/getProductById";
import ClientProductPage from "./ClientProductPage";

export const generateStaticParams = async () => {
  const products = await fetchAllProducts();
  return products.map((product) => ({ id: product.id.toString() }));
}; ///////  ssg

export async function generateMetadata({ params }) {
  const product = await fetchProductByID(+params.id);
  if (!product) {
    notFound();
  }
  return {
    title: product.title,
    description: product.description,
  };
}

const ProductPage = async ({ params }) => {
  const product = await fetchProductByID(+params.id);
  if (!product) {
    notFound();
  }
  const products = await fetchAllProducts();
  const productIndex = products.findIndex((p) => p.id === +params.id);

  const nextProductId =
    productIndex < products.length - 1 ? products[productIndex + 1].id : null;
  const prevProductId = productIndex > 0 ? products[productIndex - 1].id : null;

  return (
    <div>
      <ClientProductPage
        product={product}
        nextProductId={nextProductId}
        prevProductId={prevProductId}
      />
    </div>
  );
};

export default ProductPage;
