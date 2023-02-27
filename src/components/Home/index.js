import './index.scss';
import Loader from 'react-loaders';
import LogoOnisa from '../../assets/images/logo-nobg.png';

const Home = () => (
  <>
    <div className="container-home">
      <div className="text-zone">
        <img src={LogoOnisa} alt="developer" />
        <br />
      </div>
      <Loader type="pacman" />
    </div>

  </>
);

export default Home;
