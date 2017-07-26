import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
/**
 * Main menu of header
 */
class MainMenu extends Component {
  /**
   * render menu template
   * @return {html} The template of menu class
   */
  render() {
    const {pathname} = this.props.location;
    return (
      <ul className="site-nav">
        <li className={pathname === '/' ? 'active' : null}>
          <Link to="/">HOME</Link>
        </li>
        <li>|</li>
        <li className={pathname === '/Browse' ? 'active' : null}>
          <Link to="/Browse">BROWSE</Link>
        </li>
        <li>|</li>
        <li className={pathname === '/Dashboard' ? 'active' : null}>
          <Link to="/Dashboard">MY DASHBOARD</Link>
        </li>
        <li>|</li>
        <li className={pathname === '/Profile' ? 'active' : null}>
          <Link to="/Profile">PROFILE</Link>
        </li>
      </ul>
    );
  }
}
const mapStateToProps = (rootState) => {
  return {
    payload: rootState,
  };
};
export default withRouter(connect(mapStateToProps)(MainMenu));
