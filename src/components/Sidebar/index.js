import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faUser, faEnvelope, faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin, faGithub, faTwitter, faAngellist, faMedium,
} from '@fortawesome/free-brands-svg-icons';

import LogoGer from '../../assets/images/Abolger.png';

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoGer} alt="logo" />
    </Link>
    <nav>
      <NavLink exact="true" to="/" activeClassName="active">
        <FontAwesomeIcon icon={faHome} color="#acd0e0" />
      </NavLink>
      <NavLink exact="true" to="/about" activeClassName="active" className="about">
        <FontAwesomeIcon icon={faUser} color="#acd0e0" />
      </NavLink>
      <NavLink exact="true" to="/gallery" activeClassName="active" className="gallery">
        <FontAwesomeIcon icon={faBriefcase} color="#acd0e0" />
      </NavLink>
      <NavLink exact="true" to="/contact" activeClassName="active" className="contact">
        <FontAwesomeIcon icon={faEnvelope} color="#acd0e0" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/abolger/">
          <FontAwesomeIcon icon={faLinkedin} color="#acd0e0" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://medium.com/@abolger254">
          <FontAwesomeIcon icon={faMedium} color="#acd0e0" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://angel.co/u/david-abol-ger">
          <FontAwesomeIcon icon={faAngellist} color="#acd0e0" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/ger619">
          <FontAwesomeIcon icon={faGithub} color="#acd0e0" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/ger_abol">
          <FontAwesomeIcon icon={faTwitter} color="#acd0e0" />
        </a>
      </li>
    </ul>

  </div>
);
export default Sidebar;
