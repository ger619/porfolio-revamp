import './index.scss';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import LogoGer from '../../assets/images/layout-home.png';
import Logo from './Logo';

const Home = () => (
  <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi,
          <br />
          I am
          <img src={LogoGer} alt="developer" />
          bol
          <br />
          Fullstack Developer
        </h1>
        <h2> FrontEnd Developer (React)/ BackEnd Developer(Ruby on Rails), Social Engineer  </h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>
      <Logo />
      <Loader type="pacman" />
    </div>
  </>
);

export default Home;
