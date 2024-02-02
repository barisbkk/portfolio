import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { SiInstagram } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io5";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="nav">
        <ul className="list-about">
          <li>
            {" "}
            <Link className="links" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="links active" to="/about">
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
      <div className="about-upper">
        <h2>BIO</h2>
        <p>
          Wednesday Addams is a fictional character from the Addams Family
          multimedia franchise created by American cartoonist Charles Addams.
          She is typically portrayed as a morbid and emotionally reserved child
          that is fascinated by the macabre, often identified by her pale skin
          and black pigtails. Wednesday has been portrayed by several actresses
          in various films and television series, including Lisa Loring in the
          television series The Addams Family (1964), Christina Ricci in the
          feature films The Addams Family (1991) and Addams Family Values
          (1993), and Jenna Ortega in the streaming television series Wednesday
          (2022).
        </p>
      </div>
      <div className="about-lower">
        <div className="card">
          <p className="date">2020 - 2021</p>
          <h3>CLARUSWAY</h3>
          <p className="sm-text">Instructor & Full Stack Developer</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            vero dolores eum ut, culpa ullam quis quasi exercitationem in
            adipisci.
          </p>
        </div>
        <div className="card">
          <p className="date">2019 - 2020</p>
          <h3>Google</h3>
          <p className="sm-text">Front End Developer</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            vero dolores eum ut, culpa ullam quis quasi exercitationem in
            adipisci.
          </p>
        </div>
        <div className="card">
          <p className="date">2017 - 2019</p>
          <h3>The Best Websites Co.</h3>
          <p className="sm-text">Front End Developer</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            vero dolores eum ut, culpa ullam quis quasi exercitationem in
            adipisci.
          </p>
        </div>
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
    </div>
  );
};

export default About;
