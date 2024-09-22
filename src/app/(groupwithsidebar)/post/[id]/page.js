import CardPost from "@/app/(groupwithsidebar)/blog/CardPost";
import { notFound } from "next/navigation";
import React from "react";

export const generateStaticParams = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
    (res) => res.json()
  );
  return res.map((post) => ({ id: post.id.toString() }));
}; ///////  ssg 
export async function generateMetadata({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then(
    (res) => res.json()
  );
  return {
    title: res.title,
    description: res.body,
  };
}

const PostById = async ({ params }) => {
  const { id } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  if (response.status === 404) {
    return notFound()
  }
  const post = await response.json();
  console.log(post);
  return <CardPost title={post.title} body={post.body} />;
};

export default PostById;
