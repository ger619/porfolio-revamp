import './index.scss';
import Loader from 'react-loaders';
import RailsLogo from '../../assets/images/rails_logo.png';
import ReactLogo from '../../assets/images/reactjs.png';
import Webpack from '../../assets/images/jsweb.png';
import ReactRails from '../../assets/images/railsreact.png';

const Gallery = () => (
  <>

    <div className="container gallery-page">
      <div className="gallery-zone">
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
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={Webpack} alt="logo" width="200px" />
            </div>
            <div className="flip-card-back">
              <h2>Vanilla JS Project</h2>
              <p>A Hotel Menu</p>

              <a target="_blank" rel="noreferrer" href="https://lusindiso.github.io/Javascript-Capstone/">
                <button type="button" className="btn btn-primary">
                  Vanilla JS
                </button>
              </a>

            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={ReactRails} alt="logo" width="200px" />
            </div>
            <div className="flip-card-back">
              <h2>Bike Shop</h2>
              <p>Rails API, React & Redux</p>

              <a target="_blank" rel="noreferrer" href="https://bikes-cah.herokuapp.com/">
                <button type="button" className="btn btn-primary">
                  React-Rails
                </button>
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
    <Loader type="pacman" />
  </>

);
export default Gallery;
