import { fetchAllProducts } from "@/lib/getAll";

export async function GET(request) {
  try {
    const products = await fetchAllProducts();
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
    });
  }
}

// async function getProductLength(request) {
//   const products = await fetchAllProducts();
//   const productsLength = products.length;
//   console.log(productsLength);

//   next()
// }
// // const products = await fetchAllProducts();

// export async function POST(request) {
//   const products = await fetchAllProducts();
//   const productsLength = products.length;
//   console.log(productsLength);
//   const formData = await request.formData();
//   // const title = formData.get("title");
//   // const price = formData.get("price");
//   // const description = formData.get("description");
//   const id = productsLength+1;
//   if (!title || !price || !description || !id) {
//     return new Response(JSON.stringify({ error: `Missing required fields ${id} `  }), {
//       status: 400,
//     });
//   }
//   const newProduct = { title, price, description, id };

//   console.log("newP=> ", newProduct);

//   await db.collection("product").insertOne(newProduct);
//   return Response.json(newProduct, { status: 201 });
// }
