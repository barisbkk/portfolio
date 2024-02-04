import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { SiInstagram } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { MdPhoneIphone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import "./Contact.scss";

const Contact = () => {
  return (
    <div>
      <ul className="nav">
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
          <Link className="links active" to="/contact">
            Contact
          </Link>
        </li>
      </ul>

      <div className="contact">
        <h3>Contact Me ...</h3>
        <div className="contact-info">
          <div>
            <p className="deneme">
              <AiOutlineMail /> Email
            </p>
            <p className="info">wednesday@nevermoreacademy.edu</p>
          </div>
          <div>
            <p className="deneme">
              <MdPhoneIphone /> Phone
            </p>
            <p className="info">+40 (571) 360-1234</p>
          </div>
          <div>
            <p className="deneme">
              <FaLocationDot /> Address
            </p>
            <p className="info">Strada Zamorei 1, Bușteni 105500, Romania</p>
          </div>
        </div>
      </div>
      <div className="footer-contact">
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

export default Contact;
