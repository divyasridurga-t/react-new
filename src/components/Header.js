import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import userContext from "../hooks/userContext";
import { useSelector } from "react-redux";

import useOnlineStatusCheck from "../utils/useOnlineStatusCheck";

function Header() {
  let cartItems = useSelector((store) => store.cart.item);
  let online = useOnlineStatusCheck()
  let [buttonTxt, setBtnTxt] = useState("Login");
  let { dimension, setDimension } = useContext(userContext);

  function handleChange(e) {
    setDimension({
      lat: e.target.value,
      lon: e.target.value
    })
  }



  return (
    <div className="header">
      <div className="logo-container">
        <img width={70} height={70} src={LOGO_URL} />
      </div>
      <select onChange={handleChange}>
        <option value={'home'}>Home</option>
        <option value={'about'}>About</option>
        <option value={'contact'}>Contact</option>
      </select>
      <div className="nav-items">
        <ul>
          <li>
            status:{online ? '✅' : '🛑'}
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          {/* <li>
            <Link to={'/contact'}>Contact Us</Link>
          </li> */}
          <li><Link to='/cart'>
            Cart ({cartItems.length})
          </Link></li>

        </ul>
      </div>
    </div>
  );
}

export default Header;
