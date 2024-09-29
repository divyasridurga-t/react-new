import { useRouteError } from "react-router-dom";
import Layout from "./Layout";
const Error = () => {
  let err = useRouteError();
  return (
    <>
      <Layout>
        <h1>Oops!!!</h1>
        <h2>Page Not Found</h2>
        <h3>{err.status}</h3>
        <h4>{err.statusText}</h4>
        <h5>{err.data}</h5>
      </Layout>
    </>
  );
};

export default Error;
