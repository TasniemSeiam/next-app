// import clientPromise from "./db";

import db from "./db";

export async function fetchProductByID(id) {
  //   const client = await clientPromise;
  //   const db = client.db('products');
  console.log("===> product Id")
  const product = await db.collection("product").findOne({ id });
  return product;
}
