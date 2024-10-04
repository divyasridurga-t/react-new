import Layout from "./Layout";
import UserClass from "../userClass";
import React from "react";

// const About = () => {
//   return (
//     <>
//       <Layout>
//         <h1>About Us Page</h1>
//         <UserClass name={"divya"} ph={"4867878678"} location={"hyderabad"}/>
//       </Layout>
//     </>
//   );
// };

class About extends React.Component {
  constructor() {
    super();
    console.log("constructor11111111111");
  }
  componentDidMount() {
    console.log("CDM 1111111111111111");
  }
  componentDidUpdate(){
    console.log('...........................');
    
  }
  render() {
    console.log("render11111111111111111111");

    return (
      <>
        <h1>hello</h1>
        <CompOne />
        <CompTwo/>
        <CompThree/>
      </>
    );
  }
}

export default About;

class CompOne extends React.Component {
  constructor() {
    console.log("constructor 222222222222222");

    super();
  }

  componentDidMount() {
    console.log("CDM 222222222222222222");
  }

  render() {
    console.log("render 22222222222222");

    return (
      <>
        <p>Component 1</p>
      </>
    );
  }
}




class CompTwo extends React.Component {
  constructor() {
    console.log("constructor 3333333333333333333");

    super();
  }

  componentDidMount() {
    console.log("CDM 333333333333333333333");
  }

  render() {
    console.log("render 3333333333333333333");

    return (
      <>
        <p>Component 1</p>
      </>
    );
  }
}


class CompThree extends React.Component {
  constructor() {
    console.log("constructor 4444444444444444");

    super();
  }

  componentDidMount() {
    console.log("CDM 44444444444444444444444");
  }

  render() {
    console.log("render 44444444444444444444");

    return (
      <>
        <p>Component 1</p>
      </>
    );
  }
}
