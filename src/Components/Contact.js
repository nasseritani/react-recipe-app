import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFacebookSquare,
  faInstagram,
  faTwitch,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  return (
    <div>
      <div className="contact-form">
        <form className="contact-us">
          <div className="contact-title">
            <h2>Get In Touch</h2>
            <p>Please fill out the form and we will be in touch with you</p>
          </div>
          <input type="text" name="name" placeholder="Name..." />
          <input type="email" name="email" placeholder="Email..." />
          <textarea cols="30" placeholder="Message" />
          <button>Submit</button>
        </form>
        <div className="contact-location">
          <h2>Connect with Us</h2>
          <div className="offices">
            <h5>Beirut,Lebanon</h5>
            <address>
              Two Logan Square
              <br />
              Suite #820 Philadelphia,
              <br />
              PA 19103
            </address>
            <ul className="social-media">
              <li>
                <a href="/" className="facebook">
                  <FontAwesomeIcon icon={faFacebookSquare} fixedWidth />
                </a>
              </li>
              <li>
                <a href="/" className="instagram">
                  <FontAwesomeIcon icon={faInstagram} fixedWidth />
                </a>
              </li>
              <li>
                <a href="/" className="twitter">
                  <FontAwesomeIcon icon={faTwitter} fixedWidth />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
