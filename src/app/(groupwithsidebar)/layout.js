import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <Header/>
      <Sidebar />
      <div className="content">{children}</div>
      <Footer/>
    </>
  );
};

export default layout;
