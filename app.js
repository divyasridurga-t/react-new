import React from "react";
import ReactDOM from "react-dom/client";

// header
function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          width={70}
          height={70}
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

function Searchbar() {
  return <div>search bar</div>;
}

function ResCards() {
  return (
    <div className="thumb_card">
      <div className="img_container">
        <img
          width={200}
          height={150}
          alt="res_image"
          src="https://b.zmtcdn.com/data/pictures/6/21248166/3f2a77cf2dc353c677a3f22abb643401_featured_v2.jpg?output-format=webp"
        />
      </div>
      <div>
        <div className="res_name_rating">
          <p className="res_name">Santhosh Family Dhaba</p>
          <p className="res_rating">4.2</p>
        </div>
        <div className="res_add_price">
          <p>Patel nagar, gachibowli</p>
          <p>1,000 for two</p>
        </div>
        <div className="res_status_dist">
          <p className="status">
            Closes soon in 30 minutes
          </p>
          <p>
            28km
          </p>
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="body">
      {/* search */}
      <Searchbar />
      {/* res cards */}
      <div className="res_container">
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
      </div>
    </div>
  );
}

function Applayout() {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}
// babel is the one which converts the functions and html elements to react create element and then renders to DOM

let root = ReactDOM.createRoot(document.getElementById("root")); // manipulating reactDOM to inject the content inside div with id route
// ReactDOM.render(divTag, root)  this is no longer supported in 18
root.render(<Applayout />);
