import React, {Component} from 'react';
import * as Icon from 'react-icons/lib/fa/';
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
        <ul className="footer__menu-social">
          <li>
            <a href="">
              <Icon.FaFacebook size={17} color="#fff" />
            </a>
          </li>
          <li>
            <a href="">
              <Icon.FaTwitter size={17} color="#fff" />
            </a>
          </li>
          <li>
            <a href="">
              <Icon.FaPinterestP size={17} color="#fff" />
            </a>
          </li>
          <li>
            <a href="">
              <Icon.FaGooglePlus size={17} color="#fff" />
            </a>
          </li>
        </ul>
        <ul className="footer__menu">
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">|</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">|</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
