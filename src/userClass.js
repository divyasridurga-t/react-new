import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        message: "One",
        count:10
    }
  }

  handleClick=()=>{
    this.setState({message:this.state.message== "One"?"Two":"One"})
}
handleCountClick=()=>{
// this.setState({
//     count:this.state.count+1
// })
this.setState((prev)=>({
    count: prev.count+1
}))
}
  render() {
    let { name = "", ph = "", location = "" } = this.props;
   
    return (
      <>
        <p>name: {name}</p>
        <p>ph: {ph}</p>
        <p>email: divya@gmail.com</p>
        <p>Location: {location}</p>

        <button onClick={this.handleClick}>click</button>
        <p>{this.state.message}</p>

        <button onClick={this.handleCountClick}>click</button>
        <p>{this.state.count}</p>
      </>
    );
  }
}

export default UserClass;
