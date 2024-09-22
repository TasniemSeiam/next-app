"use client";
import React, { useState } from "react";

const CardFooter = () => {
  let [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };
  return (
    <div>
      <button className="p-2 my-4" onClick={handleLike}>
        <span className="text-white bg-blue-500 px-2 me-2 rounded "> like</span>
        {likes}
      </button>
    </div>
  );
};

export default CardFooter;
