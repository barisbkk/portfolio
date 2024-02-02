import { Link } from "react-router-dom";
import { FaArrowDownLong } from "react-icons/fa6";
import addams1 from "../../assets/img/addams-1.jpg";
import addams2 from "../../assets/img/addams-2.jpg";
import addams3 from "../../assets/img/addams-3.jpg";
import addams4 from "../../assets/img/addams-4.jpg";
import addams5 from "../../assets/img/addams-5.jpg";
import addams6 from "../../assets/img/addams-6.jpg";
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { SiInstagram } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io5";
import "./Projects.scss";

const Projects = () => {
  return (
    <div>
      <div className="nav">
        <ul className="list-projects">
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
            <Link className="links active" to="/projects">
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
      <div className="projects">
        <h2>
          <FaArrowDownLong />
          My Projects
          <FaArrowDownLong />
        </h2>
      </div>
      <main>
        <div className="img1">
          <img src={addams1} alt="adams" />
          <img src={addams2} alt="adams" />
          <img src={addams3} alt="adams" />
        </div>
        <div className="img2">
          <img src={addams4} alt="adams" />
          <img src={addams5} alt="adams" />
          <img src={addams6} alt="adams" />
        </div>
      </main>
      <div className="footer-about">
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

export default Projects;
