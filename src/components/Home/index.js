import './index.scss';
import { Link } from 'react-router-dom';
import LogoGer from '../../assets/images/logo-ger.png';

const Home = () => (
  <div className="container home">
    <div className="text-zone">
      <h1>
        Hi
        <br />
        I am Abol Glad to see you!
      </h1>
      <img src={LogoGer} alt="developer" />
      <h2> FrontEnd Developer (React)/ BackEnd Developer(Ruby on Rails)/ Social Engineer  </h2>
      <Link to="/contact" className="flat-button">CONTACT ME</Link>
    </div>
  </div>
);

export default Home;
