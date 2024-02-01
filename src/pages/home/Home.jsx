import "./Home.scss";
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { SiInstagram } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io5";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home1">
      <div className="nav">
        <ul className="list">
          <li>
            {" "}
            <Link className="links" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="links" to="/about">
              About Me
            </Link>
          </li>
          <li>
            <Link className="links" to="/projects">
              My Projects
            </Link>
          </li>
          <li>
            <Link className="links" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="home">
        <p>Hi! My Name Is</p>
        <h1>
          Wednesday <span>Addams</span>
        </h1>
        <hr />
        <p>Full Stack Web Developer</p>
      </div>
      <div className="footer-home">
        <div className="icons">
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <IoLogoFacebook />
          </a>
          <a href="#">
            <SiInstagram />
          </a>
          <a href="#">
            <IoLogoGithub />
          </a>
        </div>
        <p>© Copyright 2023</p>
      </div>
    </div>
  );
};

export default Home;
