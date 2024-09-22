
import { fetchProductByID } from "@/lib/getProductById";

export async function GET(request,{params}) {
  try {
    const product = await fetchProductByID(+params.id) ;
    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch this product" }), {
      status: 500,
    });
  }
}
