import db from "./db";

export async function fetchAllProducts() {
  console.log("==>> products <<== ");
  const products = await db.collection("product").find().toArray();
  return products;
}
