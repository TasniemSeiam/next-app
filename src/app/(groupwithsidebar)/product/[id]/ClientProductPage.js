"use client";

import { useRouter } from "next/navigation";
import CardProduct from "../../home-mongoose/CardProduct";
import styles from "./style.module.css";

const ClientProductPage = ({ product, nextProductId, prevProductId }) => {
  const router = useRouter();

  const goToNextProduct = () => {
    if (nextProductId) {
      router.push(`/product/${nextProductId}`);
    }
  };

  const goToPreviousProduct = () => {
    if (prevProductId) {
      router.push(`/product/${prevProductId}`);
    }
  };

  return (
    <>
      <div className={styles.product}>
        <CardProduct
          id={product.id}
          title={product.title}
          body={product.description}
          image={product.thumbnail}
        />
      </div>
      <div className={styles.navigationButtons}>
        {prevProductId && (
          <button onClick={goToPreviousProduct} className={styles.navButton}>
            Previous Product
          </button>
        )}
        {nextProductId && (
          <button onClick={goToNextProduct} className={styles.navButton}>
            Next Product
          </button>
        )}
      </div>
    </>
  );
};

export default ClientProductPage;
