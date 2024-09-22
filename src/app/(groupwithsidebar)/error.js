"use client";
import React from "react";

const error = ({ error, reset }) => {
  return (
    <>
      <h1 className="text-red-600"> something wrong </h1>
      <h2 className="text-red-500">{error.message}</h2>
      <button
        onClick={reset}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        try again
      </button>
    </>
  );
};

export default error;
