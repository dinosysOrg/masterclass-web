import React from 'react';
import {Link} from 'react-router-dom';

export default class PromoPanel extends React.Component {
  /**
  * render Header
  * @param {any} e
  */
  handleModalLogin(e) {
    e.preventDefault();
    this.props.initAction.showModal('modalAuth');
  }

  render() {
    return (
      <div className="discovery my-5">
        <div className="row">
          <div className="col col-md-9">
            <h3 className="discovery__title pl-5 text-uppercase">
              Discovery your own personal music path by<br/> filling out a quick form
            </h3>
          </div>
          {
            this.props.location.pathname === "/ViewAll" ? 
            <div className="col col-md-3 text-center">
              <button onClick={this.handleModalLogin.bind(this)} className="btn btn-primary">SignUp Now</button>
            </div> :
            <div className="col col-md-3 text-center">
              <Link to="/Quiz" className="btn btn-primary">Discovery Now</Link>
            </div>
          }
        </div>
      </div>
    );
  }
};
