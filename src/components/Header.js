import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

function Header() {
    let [buttonTxt, setBtnTxt] = useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    width={70}
                    height={70}
                    src={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button onClick={() => { setBtnTxt(buttonTxt == "Login" ? "Logout" : "Login") }}>{buttonTxt}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header