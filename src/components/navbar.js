"use client"
import Image from "next/image";
import Logo from "../../assets/Logo.svg";
import loginArrow from "../../assets/loginArrow.svg";
import menuBtn from "../../assets/menuButton.svg";
import { useState } from "react";

const Navbar = () => {
  const [Toggle, setToggle] = useState(false);
  const HandleMenubar = () => {
    setToggle(!Toggle)
  };
  return (
    <div className="navbarContainer">
      <div className="nameAndLogo">
        <Image src={Logo} width={139} height={48} alt="logo" priority={false} />
      </div>
      <div className="navbarMenuItems">
        <ul>
          <li>Card acces</li>
          <li>Banking</li>
          <li>Processing</li>
          <li>Abouts</li>
          <li>Carriers</li>
          <li>Contacts</li>
        </ul>
      </div>
      <div className="loginAndMenuBtnDiv">
        <button className="loginBtn">
          <div className="login">Login</div>
          <Image
            src={loginArrow}
            width={20}
            height={20}
            alt="login arrow"
            style={{
              marginLeft: "8px",
            }}
          />
        </button>
        <button className="menuBtn" onClick={HandleMenubar}>
          <Image src={menuBtn} width={32} height={32} alt="menu" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
