import './index.scss';
import Loader from 'react-loaders';
import MenuLogo from '../../assets/images/menu-logo.png';
import HTML5 from '../../assets/images/HTML5_logo.png';
import CSS from '../../assets/images/css_logo.png';
import Coin from '../../assets/images/coin.png';
import Webpack from '../../assets/images/jsweb.png';
import Reactjs from '../../assets/images/reactjs.png';
import Netlify from '../../assets/images/netlify.png';
//              <a target="_blank" rel="noreferrer" href="https://tomb-stone.herokuapp.com/users/sign_in">
// <a target="_blank" rel="noreferrer" href="https://lusindiso.github.io/Javascript-Capstone/">
// <a target="_blank" rel="noreferrer" href="https://bikes-cah.herokuapp.com/">

const Gallery = () => (
  <>

    <div className="container gallery-page">
      <div className="gallery-zone">
        <h1>Gallery</h1>
        <div className="gallery-grid">
          <div className="card">
            <div>
              <img className="card-image" src={MenuLogo} alt="logo" height="150px" />
            </div>
            <div className="card-text">
              <h2>A Hotel Menu</h2>
              <h3>A hotel menu built with Webpack/Vanillajs, HTML, CSS and we consume an API </h3>
              <a target="_blank" rel="noreferrer" href="https://lusindiso.github.io/Javascript-Capstone/">
                <button type="button" className="flat-button">See Live</button>
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/Lusindiso/Javascript-Capstone">
                <button type="button" className="flat-button">See Source</button>
              </a>
            </div>
            <div className="card-stats">
              <img src={Webpack} alt="webpack" height="72px" />
              <img src={HTML5} alt="html 5" height="72px" />
              <img src={CSS} alt="webpack" height="72px" />
            </div>
          </div>
          <div className="card">
            <div>
              <img className="card-image" src={Coin} alt="logo" height="150px" />
            </div>
            <div className="card-text">
              <h2>Ger Crypto App</h2>
              {/* eslint-disable-next-line max-len */}
              <h3>App that consumes RapidApi, is built on React and Redux, and hosted on Netifly</h3>
              <a target="_blank" rel="noreferrer" href="https://deploy-preview-1--storied-cobbler-ece3f1.netlify.app/">
                <button type="button" className="flat-button">See Live</button>
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/ger619/react-capstone">
                <button type="button" className="flat-button">See Source</button>
              </a>
            </div>
            <div className="card-stats">
              <img src={Reactjs} alt="React" height="72px" />
              <img src={HTML5} alt="html 5" height="72px" />
              <img src={Netlify} alt="webpack" height="72px" />
            </div>
          </div>
          <div className="card">
            <div>
              <img className="card-image" src={MenuLogo} alt="logo" width="200px" />
            </div>
            <div className="card-text">
              <h2>A Rail Bank APP</h2>
              <h3>A hotel menu built with Webpack/Vanillajs, HTML, CSS and we consume an API </h3>
              <a target="_blank" rel="noreferrer" href="https://lusindiso.github.io/Javascript-Capstone/">
                <button type="button" className="flat-button">See Live</button>
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/Lusindiso/Javascript-Capstone">
                <button type="button" className="flat-button">See Source</button>
              </a>
            </div>
            <div className="card-stats">
              <img src={Webpack} alt="webpack" height="72px" />
              <img src={HTML5} alt="html 5" height="72px" />
              <img src={CSS} alt="webpack" height="72px" />
            </div>
          </div>
          <div className="card">
            <div>
              <img className="card-image" src={MenuLogo} alt="logo" width="200px" />
            </div>
            <div className="card-text">
              <h2>A Hotel Menu</h2>
              <h3>A hotel menu built with Webpack/Vanillajs, HTML, CSS and we consume an API </h3>
              <a target="_blank" rel="noreferrer" href="https://lusindiso.github.io/Javascript-Capstone/">
                <button type="button" className="flat-button">See Live</button>
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/Lusindiso/Javascript-Capstone">
                <button type="button" className="flat-button">See Source</button>
              </a>
            </div>
            <div className="card-stats">
              <img src={Webpack} alt="webpack" height="72px" />
              <img src={HTML5} alt="html 5" height="72px" />
              <img src={CSS} alt="webpack" height="72px" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Loader type="pacman" />
  </>

);
export default Gallery;
