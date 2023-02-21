import React from "react";
import { Footer } from "@components/Footer/Footer";
import { Navbar } from "@components/Navbar/Navbar";
import { Copyright } from "@components/Copyright/Copyright";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
      <Copyright />
    </div>
  );
};

export { Layout };
