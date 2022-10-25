import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact, faHtml5, faGitAlt, faJsSquare, faCss3,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import RailsLogo from '../../assets/images/rails_logo.png';
import ReactLogo from '../../assets/images/reactjs.png';

const Gallery = () => (
  <>

    <div className="container gallery-page">
      <div className="text-zone">
        <h1>Gallery</h1>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={RailsLogo} alt="logo" width="200px" />
            </div>
            <div className="flip-card-back">
              <h2>Ruby on Rails Project</h2>
              <p>Bank App Ruby on Rails</p>

              <a target="_blank" rel="noreferrer" href="https://tomb-stone.herokuapp.com/users/sign_in">
                <button type="button" className="btn btn-primary">
                  Rails Project
                </button>
              </a>

            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={ReactLogo} alt="logo" width="200px" />
            </div>
            <div className="flip-card-back">
              <h2>ReactJs API consumption</h2>
              <p>Crypto consumption using React and Redux</p>
              <a target="_blank" rel="noreferrer" href="https://deploy-preview-1--storied-cobbler-ece3f1.netlify.app/">
                <button type="button" className="btn btn-primary">
                  Rails Project
                </button>
              </a>
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
