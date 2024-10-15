import Header from "./Header";
import Footer from "./footer";
import userContext from "../hooks/userContext";
import { useContext, useEffect, useState } from "react";
import { Provider } from "react-redux";
import appStore from "../hooks/appStore";

const Layout = ({ children }) => {
  let x = useContext(userContext);
  let [dimension, setDimension] = useState(x);



  return (
    <>
      <Provider store={appStore}>
        <userContext.Provider value={{ dimension, setDimension }}>
          <Header />
          {children}
          <Footer />
        </userContext.Provider>
      </Provider>
    </>
  );
};

export default Layout;
