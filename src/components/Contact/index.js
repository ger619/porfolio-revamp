import './index.scss';
import Loader from 'react-loaders';
import {
  MapContainer, Marker, Popup, TileLayer,
} from 'react-leaflet';

const Contact = () => (
  <>
    <div className="container contact-page">
      <div className="text-zone">
        <h1>Contact Me</h1>
        <p>
          {/* eslint-disable-next-line max-len */}
          If you have an application you are interested in developing, a feature that you need built or a project that needs coding. I’d love to help with it. However if you have any questions, please feel free to contact me.
        </p>
        <div className="contact-form">
          <form action="https://formspree.io/f/mnqwzknj" id="form-email" method="post">
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <textarea name="message" placeholder="Message" required />
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className="info-map">
        David Ger
        <br />
        Kenya
        <br />
        Embakasi East, Nairobi
        <br />
        <span>abolger254@gmail.com</span>
      </div>
      <div className="map-wrap">
        <MapContainer center={[-1.2764, 36.9580]} zoom={15}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[-1.2764, 36.9580]}>
            <Popup>Abol Ger City</Popup>
          </Marker>
        </MapContainer>
      </div>

    </div>
    <Loader type="pacman" />
  </>

);
export default Contact;
