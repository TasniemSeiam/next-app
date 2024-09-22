"use server";
import { addProduct } from "@/lib/addProduct";
import { fetchAllProducts } from "@/lib/getAll";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { v2 as cloudinary } from "cloudinary";
export async function create(formData) {
  
  cloudinary.config({
    cloud_name: "ddgrxwm8f",
    api_key: "616563913966764",
    api_secret: "s0XchpmRVPoTh3mqwB5g3MmihVg", // Click 'View API Keys' above to copy your API secret
  });

  const products = await fetchAllProducts();
  const productsLength = products.length;

  const file = formData.get("thumbnail");
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  const result= await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({}, function (error, result) {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      })
      .end(buffer);
  });

  const title = formData.get("title");
  const price = formData.get("price");
  const description = formData.get("description");
  const thumbnail = result.secure_url;
  const id = productsLength + 1;

  // if (!title || !price || !description || !thumbnail) {
  //   throw new Error("All fields are required");
  // }

  addProduct({ title, price, description, thumbnail, id });
  revalidatePath("/home-mongoose");
  redirect("/home-mongoose");
}
