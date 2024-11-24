import './index.css';
import Loader from 'react-loaders';
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import Photos from '../Photos';

const Achievements = () => (
  <>

    <div className="container about-page">
      <div className="text-zone">
        <h1>Awards Won!</h1>
        {/* eslint-disable-next-line max-len */}
        <p>I led the team to a first-place victory in the Valuechain Factory Hackathon, where I utilized my expertise in Ruby on Rails as both a project manager and developer.</p>
        {/* eslint-disable-next-line max-len */}
        <p>I contributed to the third-place success in the Davis and Shirtliff Hackathon as a part of the data analysis team, utilizing PowerBi, AVAYA, and social media platforms to derive insights and make informed decisions.</p>
        {/* eslint-disable-next-line max-len */}
        <p>I led my team to a first-place victory in the Open Institute NoApp Hackathon as both a Ruby on Rails developer and project manager. As a result of our success, I was selected as one of the top six participants to undertake an internship and had the privilege of attending the summer school at the University of Warwick.</p>
        {/* eslint-disable-next-line max-len */}
        <p>I have also worked as a trainer, where I taught young girls from underprivileged societies HTML and CSS and life skills. This has enabled me to understand the importance of giving back as its core to your organization’s policies.</p>
      </div>

      <div className="stage-cube-cont">
        <div>
          <Photos />
        </div>
      </div>
    </div>
    <Loader type="pacman" active />
  </>
);

export default Achievements;
