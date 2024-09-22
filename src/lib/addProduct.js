import db from "./db";


export const addProduct = async (body) => {

  await db.collection("product").insertOne(body);
    
}