import "./index.scss";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faPhone, faAt } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faAngellist,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { AiFillHome, AiFillInstagram } from "react-icons/ai";
import kijani from "../../assets/images/kijani_logo.png";
import logo from "../../assets/images/logo-nobg.png";

const Sidebar = () => (
  <>
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={logo} alt="logo" className="image" />
      </Link>
      <nav>
        <NavLink exact="true" to="/" activeClassName="active">
          {/* <FontAwesomeIcon icon={faPhone} color="#ffffff" /> */}
          <AiFillHome color="#9e1b1d" />
        </NavLink>
        <NavLink
          exact="true"
          to="/about"
          activeClassName="active"
          className="about"
        >
          <img src={kijani} alt="logo" className="image" />
        </NavLink>
        <NavLink
          exact="true"
          to="/gallery"
          activeClassName="active"
          className="gallery"
        >
          {/* <FontAwesomeIcon icon={faGlobe} color="#ffffff" /> */}
          <img src="/revin.png" alt="logo" className="image" />
        </NavLink>
        <NavLink
          exact="true"
          to="/contact"
          activeClassName="active"
          className="contact"
        >
          <img src="/duara.png" alt="logo" className="image" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="/">
            <AiFillInstagram color="#ffffff" />
          </a>
        </li>
      </ul>
    </div>
    <div className="nav-bar-left" />
  </>
);
export default Sidebar;
