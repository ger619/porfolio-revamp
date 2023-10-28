import './index.scss';
import Loader from 'react-loaders';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import RailsLogo from '../../assets/images/rails_logo.png';
import Reactjs from '../../assets/images/reactjs.png';
import Webpack from '../../assets/images/jsweb.png';
import Ruby from '../../assets/images/ruby.png';
import JSicon from '../../assets/images/jsicon.png';
import Postgres from '../../assets/images/postgres.png';
import HTML5 from '../../assets/images/HTML5_logo.png';

const About = () => (
  <>

    <div className="container about-page">
      <div className="text-zone">
        <h1>About Me</h1>
        {/* eslint-disable-next-line max-len */}
        <p>My name is Abol Ger, my goal as a project manager and web developer is to improve my skills to be able successfully and in the shortest time period to provide high-quality solutions.</p>
        {/* eslint-disable-next-line max-len */}
        <p>I am currently employed as a project manager and software developer, where I have gained experience using Flutter and Ruby on Rails. I also have a track record of developing more than five websites.</p>
        {/* eslint-disable-next-line max-len */}
        <p>I completed a full-stack course at Microverse, an online training school, where I remotely worked on solutions for eight hours a day alongside other developers. This experience helped me improve my coding skills, documentation, report writing, as well as my communication and teamwork.</p>
        {/* eslint-disable-next-line max-len */}
        <p>I also studied a Diploma in Computer Information Systems from Kenya Methodist University.</p>
        {/* eslint-disable-next-line max-len */}
        <p>I have also worked as a trainer, where I taught young girls from underprivileged societies HTML and CSS and life skills. This has enabled me to understand the importance of giving back as its core to your organization’s policies.</p>
      </div>

      <div className="stage-cube-cont">
        <div>
          <h1>Languages</h1>
          <div className="lang" style={{ width: 120, height: 120 }}>
            <CircularProgressbarWithChildren value={50} style={{ color: 'yellow' }}>
              <img style={{ width: 62, marginTop: -5 }} src={Ruby} alt="Ruby" />
              <br />
              <div style={{ fontSize: 12, marginTop: -15 }}>
                <strong>50%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div className="lang" style={{ width: 120, height: 120 }}>
            <CircularProgressbarWithChildren value={94} style={{ color: 'yellow' }}>
              <img style={{ width: 62, marginTop: -5 }} src={HTML5} alt="HTML" />
              <br />
              <div style={{ fontSize: 12, marginTop: -15 }}>
                <strong>94%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div className="lang" style={{ width: 120, height: 120 }}>
            <CircularProgressbarWithChildren value={65} style={{ color: 'yellow' }}>
              <img style={{ width: 62, marginTop: -5 }} src={JSicon} alt="Javascript" />
              <br />
              <div style={{ fontSize: 12, marginTop: -15 }}>
                <strong>65%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div className="lang" style={{ width: 120, height: 120 }}>
            <CircularProgressbarWithChildren value={55} style={{ color: 'yellow' }}>
              <img style={{ width: 62, marginTop: -5 }} src={Postgres} alt="Postrges" />
              <br />
              <div style={{ fontSize: 12, marginTop: -15 }}>
                <strong>55%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
        <div>
          <h1>Frameworks</h1>
          <div className="lang" style={{ width: 120, height: 120 }}>
            <CircularProgressbarWithChildren value={50} style={{ color: 'yellow' }}>
              <img style={{ width: 72, marginTop: -5 }} src={RailsLogo} alt="React" />
              <br />
              <div style={{ fontSize: 12, marginTop: -20 }}>
                <strong>50%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div className="lang" style={{ width: 120, height: 120 }}>
            <CircularProgressbarWithChildren value={72} style={{ color: 'yellow' }}>
              <img style={{ width: 72, marginTop: -5 }} src={Reactjs} alt="React" />
              <br />
              <div style={{ fontSize: 12, marginTop: -20 }}>
                <strong>72%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div className="lang" style={{ width: 120, height: 120 }}>
            <CircularProgressbarWithChildren value={45} style={{ color: 'yellow' }}>
              <img style={{ width: 72, marginTop: -5 }} src={Webpack} alt="React" />
              <br />
              <div style={{ fontSize: 12, marginTop: -20 }}>
                <strong>45%</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
    </div>
    <Loader type="pacman" />
  </>

);
export default About;
