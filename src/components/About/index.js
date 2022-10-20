import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact, faHtml5, faGitAlt, faJsSquare, faCss3,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => (
  <>

    <div className="container about-page">
      <div className="text-zone">
        <h1>About Me</h1>
        {/* eslint-disable-next-line max-len */}
        <p>My name is Abol Ger, my goal as a web developer is to improve my skills to be able successfully and in the shortest time period to write high-quality code with high professionalism.</p>
        {/* eslint-disable-next-line max-len */}
        <p>I previously worked as an android and software developer where I learned how to use Android, HTML/CSS, Ruby on Rails. I developed several websites.</p>
        {/* eslint-disable-next-line max-len */}
        <p>Currently, I recently completed a full stack course at Microverse, an online training school where I code 8 hours a day remotely with other developers and have learned Ruby, HTML/CSS, JavaScript, communication skills, and teamwork.</p>
        {/* eslint-disable-next-line max-len */}
        <p>I have also worked as a trainer, where I taught young girls from underprivileged societies HTML and CSS and life skills. This has enabled me to understand the importance of giving back as its core to your organization’s policies.</p>
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
export default About;
