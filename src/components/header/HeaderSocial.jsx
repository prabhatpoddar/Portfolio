import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaDribbble } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a href="Https://Linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="Https://github.com" target="_blank">
        <BsGithub />
      </a>
      <a href="Https://dribbble.com" target="_blank">
        <FaDribbble />
      </a>
    </div>
  );
};

export default HeaderSocial;
