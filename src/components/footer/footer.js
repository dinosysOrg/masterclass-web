import React, {Component} from 'react';
import * as Icon from 'react-icons/lib/fa/';
import './footer.style.css';
/**
 * Footer of project
 */
class Footer extends Component {
  /**
 * render Footer
 * @return {html} The template of Footer class
 */
  render() {
    return (
      <footer className="footer">
        <div className="container clearfix">
          <div className="float-left">
            <ul className="footer__menu-social">
              <li className="nav-item">
                <a target="_blank" href="">
                  <Icon.FaFacebook size={17} color="#fff" />
                </a>
              </li>
              <li className="nav-item">
                <a target="_blank" href="">
                  <Icon.FaTwitter size={17} color="#fff" />
                </a>
              </li>
              <li className="nav-item">
                <a target="_blank" href="">
                  <Icon.FaPinterestP size={17} color="#fff" />
                </a>
              </li>
              <li className="nav-item">
                <a target="_blank" href="">
                  <Icon.FaGooglePlus size={17} color="#fff" />
                </a>
              </li>
            </ul>
          </div>
          <div className="float-right">
            <ul className="footer__menu">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
