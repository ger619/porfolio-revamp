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
        <p>My name is Abol Ger, and I am a Senior Ruby on Rails Developer and Project Manager with vast experience in building scalable, high-quality web applications and enterprise systems. My goal is to continuously improve my technical and leadership skills in order to deliver efficient, reliable, and innovative solutions within the shortest possible time while maintaining high development standards.</p>
        {/* eslint-disable-next-line max-len */}
        <p>As an independent contractor, I have successfully designed, developed, and managed multiple software projects and ERP systems using Ruby on Rails and other modern web technologies. I have strong experience in full-stack development, system architecture, project management, API integrations, database design, reporting systems, and business process automation. Senior Ruby on Rails developers are recognized for their ability to deliver scalable and maintainable solutions while leading projects effectively.</p>
        {/* eslint-disable-next-line max-len */}
        <p>I have successfully developed 3 ERP systems.</p>
        <ul>
          <li>Taskbridge (Craftsilicon)</li>
          <li>Murang&#39;a Seals (Murang&#39;a Seals)</li>
          <li>Quadvendor (Giga Cypher Limited)</li>
        </ul>
        {/* eslint-disable-next-line max-len */}
        <p>I have successfully developed and contributed to ERP systems that improved operational efficiency, reporting, workflow management, and business automation for organizations.</p>
        {/* eslint-disable-next-line max-len */}
        <p>I also completed a full-stack software development program at Microverse, where I collaborated remotely with developers from different backgrounds while working on software solutions for over eight hours daily. This experience strengthened my expertise in software engineering, agile collaboration, technical documentation, communication, teamwork, and remote development practices.</p>
        {/* eslint-disable-next-line max-len */}
        <p>In addition, I hold a Diploma in Computer Information Systems from Kenya Methodist University.</p>
        {/* eslint-disable-next-line max-len */}
        <p>Beyond software development, I have experience as a trainer and mentor, where I taught young girls from underprivileged communities HTML, CSS, and life skills. This experience strengthened my leadership, mentorship, and communication abilities while reinforcing my belief in giving back to society through technology and education.</p>
        {/* eslint-disable-next-line max-len */}
        <p>I am passionate about building impactful digital solutions, leading development teams, solving complex business challenges, and continuously learning emerging technologies to remain at the forefront of software development and project management.</p>
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
