import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";
import Typical from 'react-typical';


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'M</h5>
        <h1>Prabhat</h1>
        <h5 className="text-light"> <Typical
                            loop={Infinity}
                            steps={[

                                "Welcome To My Portfolio",
                                2000,
                                "Hi'This is Prabhat",
                                2000,
                                "Full Stack Devloper",
                                2000,
                                "This Site Is made With React js",
                                2000,
                               
                          ]}
                          /></h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#Contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
