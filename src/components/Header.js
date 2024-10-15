import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import userContext from "../hooks/userContext";

import useOnlineStatusCheck from "../utils/useOnlineStatusCheck";

function Header() {
  let online=useOnlineStatusCheck()
  let [buttonTxt, setBtnTxt] = useState("Login");
  let { dimension, setDimension } = useContext(userContext);

  function handleChange(e) {
    setDimension({
      lat: e.target.value,
      lon:e.target.value
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
            status:{online? '✅':'🛑'}
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() => {
              setBtnTxt(buttonTxt == "Login" ? "Logout" : "Login");
            }}
          >
            {buttonTxt}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
