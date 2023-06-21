import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/anshu.png";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hi I am Anshu verma</h1>
      <h2 className="profile-text">The web developer and freelancer at fiver</h2>
      <h4 className="profile-text">
       since i am a fan of pokemon. so i created this pokedex just for fun
      </h4>
      <div className="profile-links">
        <a href="https://github.com/anshuvermaa">
          <FaGithub />
        </a>
        <a href="https://www.youtube.com/channel/UCx-Pm3KDopHAyxB3OJSDWBQ">
          <FaYoutube />
        </a>
        <a href="https://www.linkedin.com/in/anshu-verma-747b6513a/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
