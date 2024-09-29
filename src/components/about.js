import Layout from "./Layout";
import UserClass from "../userClass";

const About = () => {
  return (
    <>
      <Layout>
        <h1>About Us Page</h1>
        <UserClass name={"divya"} ph={"4867878678"} location={"hyderabad"}/>
      </Layout>
    </>
  );
};

export default About;
