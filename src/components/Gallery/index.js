import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact, faHtml5, faGitAlt, faJsSquare, faCss3,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import LogoGer from '../../assets/images/Abolger.png';

const Gallery = () => (
  <>

    <div className="container gallery-page">
      <div className="text-zone">
        <h1>Portfolio Gallery</h1>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={LogoGer} alt="logo" width="200px" />
            </div>
            <div className="flip-card-back">
              <h2>John Doe</h2>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#5ED4F4" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faCss3} color="#EC4D28" />
          </div>
        </div>

      </div>
    </div>
    <Loader type="pacman" />
  </>

);
export default Gallery;