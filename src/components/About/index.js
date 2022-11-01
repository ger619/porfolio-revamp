import './index.scss';
import Loader from 'react-loaders';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import RailsLogo from '../../assets/images/rails_logo.png';

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
        <p>I also studied a Diploma in Computer Information Systems from Kenya Methodist University.</p>
        {/* eslint-disable-next-line max-len */}
        <p>I have also worked as a trainer, where I taught young girls from underprivileged societies HTML and CSS and life skills. This has enabled me to understand the importance of giving back as its core to your organization’s policies.</p>
      </div>

      <div className="stage-cube-cont">
        <div>
          <h1>Languages and Frameworks</h1>
          <div style={{ width: 120, height: 120 }}>
            <CircularProgressbarWithChildren value={50} style={{ color: 'yellow' }}>
              {/* eslint-disable-next-line max-len */}
              <img style={{ width: 72, marginTop: -5 }} src={RailsLogo} alt="React" />
              <br />
              <div style={{ fontSize: 12, marginTop: -20 }}>
                <strong>50%</strong>
              </div>
            </CircularProgressbarWithChildren>
            ;
          </div>

        </div>
      </div>
    </div>
    <Loader type="pacman" />
  </>

);
export default About;
