import React from "react";
import CardPost from "./CardPost";
import Link from "next/link";
import ScrollToTop from "@/components/scrollToTop";



// export const revalidate = 10; // isr
// export const dynamic="force-dynamic"; // ssr
const Blog = async () => {

  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache:"no-store"
  });
  const posts = await response.json();
  // console.log(posts);

  return (
    <div className=" container ">
      {posts.map((post) => (
        <Link href={`/post/${post.id}`} key={post.id}>
          <CardPost id={post.id} title={post.title} body={post.body} />
        </Link>
      ))}
      <ScrollToTop/>
    </div>
  );
};

export default Blog;
