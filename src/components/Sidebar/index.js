import './index.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe, faPhone, faAt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin, faGithub, faTwitter, faAngellist, faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
  <>
    <div className="nav-bar">
      <nav>
        <NavLink exact="true" to="/" activeClassName="active">
          <FontAwesomeIcon icon={faPhone} color="#acd0e0" />
        </NavLink>
        <NavLink exact="true" to="/about" activeClassName="active" className="about">
          <FontAwesomeIcon icon={faAt} color="#acd0e0" />
        </NavLink>
        <NavLink exact="true" to="/gallery" activeClassName="active" className="gallery">
          <FontAwesomeIcon icon={faGlobe} color="#acd0e0" />
        </NavLink>
        <NavLink exact="true" to="/contact" activeClassName="active" className="contact">
          <FontAwesomeIcon icon={faInstagramSquare} color="#acd0e0" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/abolger/">
            <FontAwesomeIcon icon={faLinkedin} color="#acd0e0" />
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
    <div className="nav-bar-left" />
  </>
);
export default Sidebar;
