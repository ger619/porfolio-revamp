import './index.scss';
import Loader from 'react-loaders';
import MsealLogo from '../../assets/images/msealslogo.png';
import HTML5 from '../../assets/images/HTML5_logo.png';
import Coin from '../../assets/images/coin.png';
import Reactjs from '../../assets/images/reactjs.png';
import Netlify from '../../assets/images/netlify.png';
import Rails from '../../assets/images/rails_logo.png';
import Heroku from '../../assets/images/heroku.png';
import RailsLogo from '../../assets/images/railsreact.png';
import Tailwind from '../../assets/images/tailwindcss.png';
import Render from '../../assets/images/render.png';

const Gallery = () => (
  <>
    <div className="container gallery-page">
      <div className="gallery-zone">
        <h1>Gallery</h1>
        <div className="gallery-grid">
          <div className="card">
            <div>
              <img className="card-image" src={MsealLogo} alt="logo" height="150px" />
            </div>
            <div className="card-text">
              <h2>Murang&#39;a Seals</h2>
              {/* eslint-disable-next-line max-len */}
              <h3>This is an ecommerce site for one of the leading football clubs in the country</h3>
              <a target="_blank" rel="noreferrer" href="https://github.com/Lifeline-Solutions/mseal-rails">
                <button type="button" className="flat-button">See Live</button>
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.murangaseal.com/">
                <button type="button" className="flat-button">See Source</button>
              </a>
            </div>
            <div className="card-stats">
              <img src={Tailwind} alt="webpack" height="72px" />
              <img src={Rails} alt="html 5" height="72px" />
              <img src={Render} alt="webpack" width="72" />
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
              <img className="card-image" src={Rails} alt="logo" width="150px" />
            </div>
            <div className="card-text">
              <h2>A Rail Bank APP</h2>
              <h3>Ruby on Rails project that can be used for banking, hosted on Heroku </h3>
              <a target="_blank" rel="noreferrer" href="https://tomb-stone.herokuapp.com/users/sign_in">
                <button type="button" className="flat-button">See Live</button>
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/ger619/rails-capstone">
                <button type="button" className="flat-button">See Source</button>
              </a>
            </div>
            <div className="card-stats">
              <img src={Rails} alt="webpack" height="72px" />
              <img src={HTML5} alt="html 5" height="72px" />
              <img src={Heroku} alt="webpack" height="72px" />
            </div>
          </div>
          <div className="card">
            <div>
              <img className="card-image" src={RailsLogo} alt="logo" width="150px" />
            </div>
            <div className="card-text">
              <h2>MotorCycle Lending App</h2>
              {/* eslint-disable-next-line max-len */}
              <h3>A Bike Shop App developed using React for Front-End and Ruby on Rails for Back-End.</h3>
              <a target="_blank" rel="noreferrer" href="https://bike-shop-cmlx.netlify.app/">
                <button type="button" className="flat-button">See Live</button>
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/ger619/bike-shop-backend">
                <button type="button" className="flat-button">See Source</button>
              </a>
            </div>
            <div className="card-stats">
              <img src={Rails} alt="Rails" height="72px" />
              <img src={Reactjs} alt="React" height="72px" />
              <img src={Heroku} alt="Heroku" height="72px" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Loader type="pacman" />
  </>

);
export default Gallery;
