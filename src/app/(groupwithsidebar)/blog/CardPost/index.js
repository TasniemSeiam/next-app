import React from "react";
import styles from "./style.module.css";
import CardFooter from "../CardFooter";

const CardPost = ({title,body}) => {
 
      
  return (
    <div  className={`card p-4 my-4 ${styles.cardPost} `}>
      <h2 className=" font-bold ">{title}</h2>
      <p>{body}</p>
      <CardFooter  />
    </div>
  );
};

export default CardPost;
