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
        <h2>Project Manager/ FrontEnd Developer (React)/ BackEnd Developer (Ruby on Rails)</h2>
        <h2>Diploma in Computer Information Systems</h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
        <Link to="/CV.pdf" className="flat-button" target="_blank">DOWNLOAD CV</Link>
      </div>
      <Logo />
      <Loader type="pacman" />
    </div>
  </>
);

export default Home;
