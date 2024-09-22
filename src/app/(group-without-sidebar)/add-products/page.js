import React from "react";
import styles from "./style.module.css";
import { fetchAllProducts } from "@/lib/getAll";
import { revalidatePath } from "next/cache";
import { addProduct } from "@/lib/addProduct";
import { create } from "./create";

const AddProduct = () => {
  return (
    <div>
      <form className={styles.form} action={create}>
        <label htmlFor="title">Product Name</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="price">Product Price</label>
        <input type="number" name="price" id="price" />
        <label htmlFor="description">Product Description</label>
        <textarea
          name="description"
          id="description"
          cols="20"
          rows="5"
        ></textarea>
        <label htmlFor="thumbnail">Product Image</label>
        <input
          type="file"
          name="thumbnail"
          id="thumbnail"
          className=" bg-gray-200 "
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
