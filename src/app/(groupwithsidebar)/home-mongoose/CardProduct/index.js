import React from "react";
import styles from "./style.module.css";
// import CardFooter from "../CardFooter";
import Image from "next/image";

const CardProduct = ({ title, body,image }) => {
  return (
    <div className={`card p-4 my-4 ${styles.cardPost}  ` }>
      <h2 className=" font-bold text-blue-800 mb-6  ">{title}</h2>
      <div className=" relative h-52 ">
      <Image src={image} alt={title} fill />
      </div>
      <p className="my-4" >{body}</p>
      </div>
    );
    // <CardFooter />
};

export default CardProduct;
