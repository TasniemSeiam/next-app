import React from "react";

const CatchAll = ({ params }) => {
  return (
    <ul>
      {params.filters.map((route, index) => (
        <li key={index}>{route}</li>
      ))}
    </ul>
  );
};

export default CatchAll;
