import Header from "./Header";
import Footer from "./footer";
import userContext from "../hooks/userContext";
import { useContext, useEffect, useState } from "react";

const Layout = ({ children }) => {
  let x = useContext(userContext);
  let [dimension, setDimension] = useState(x);
  
  
  
  return (
    <>
      <userContext.Provider value={{ dimension, setDimension }}>
        <Header />
        {children}
        <Footer />
      </userContext.Provider>
    </>
  );
};

export default Layout;
