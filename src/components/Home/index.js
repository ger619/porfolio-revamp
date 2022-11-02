import './index.scss';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import LogoGer from '../../assets/images/layout-home.png';
import Logo from './Logo';

const onButtonClick = () => {
  fetch('../../assets/images/CV.pdf').then((response) => {
    response.blob().then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'CV.pdf';
      a.click();
    });
  });
};

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
        <h2>FrontEnd Developer (React)/ BackEnd Developer (Ruby on Rails)</h2>
        <h2>Diploma in Computer Information Systems</h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <a onClick={onButtonClick} className="flat-button">DOWNLOAD CV</a>
      </div>
      <Logo />
      <Loader type="pacman" />
    </div>
  </>
);

export default Home;
