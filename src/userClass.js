import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // message: "One",
      // count: 10,
      userinfo: {
        name: "",
        location: "",
        avatar_url: ""
      }
    }
  }

  // handleClick = () => {
  //   this.setState({ message: this.state.message == "One" ? "Two" : "One" })
  // }
  // handleCountClick = () => {
  //   this.setState((prev) => ({
  //     count: prev.count + 1
  //   }))
  // }



  async componentDidMount() {
    // used for api calling similar to useEffect
    let data = await fetch('https://api.github.com/users/divyasridurga-t');
    let json = await data.json();
    this.setState({
      userinfo: json
    })
  }


  render() {
    // let { name = "", ph = "", location = "" } = this.props;
    let { name = '', location, avatar_url } = this.state.userinfo
    return (
      <>
        <p>name: {name}</p>

        <p>email: divya@gmail.com</p>
        <p>Location: {location || "no location provided"}</p>
        <img width={50} height={50} src={avatar_url} />
        {/* <button onClick={this.handleClick}>click</button>
        <p>{this.state.message}</p>

        <button onClick={this.handleCountClick}>click</button>
        <p>{this.state.count}</p> */}
      </>
    );
  }
}

export default UserClass;
