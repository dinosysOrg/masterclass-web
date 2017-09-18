import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
export default class PromoPanel extends React.Component {
  /**
  * render Header
  * @param {any} e
  */
  handleModalLogin(e) {
    e.preventDefault();
    this.props.initAction.showModal('modalAuth');
  }
  renderButtonPromo(){
    if (this.props.location.pathname === "/ViewAll") {
      return (
        <div className="col col-md-3 text-center">
          <button onClick={this.handleModalLogin.bind(this)} className="btn btn-primary">{this.context.t('sign_up_now')}</button>
        </div>
      );
    } else if (this.props.payload.pathReducer.paths.recommend.length !== 0) {
      return(
        <div className="col col-md-3 text-center">
          <Link to="/Quiz" className="btn btn-primary">{this.context.t('take_quiz_again')}</Link>
        </div>
      );
    } else {
      return (
        <div className="col col-md-3 text-center">
          <Link to="/Quiz" className="btn btn-primary">{this.context.t('discovery_now')}</Link>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="discovery container my-5">
        <div className="row">
          <div className="col col-md-9">
            <h3 className="discovery__title pl-5 text-uppercase">
              Discovery your own personal music path by<br/> filling out a quick form
            </h3>
          </div>
          {this.renderButtonPromo()}
        </div>
      </div>
    );
  }
};

PromoPanel.contextTypes = {
  t: PropTypes.func.isRequired,
};
