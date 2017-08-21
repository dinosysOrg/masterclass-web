import React from 'react';
import {Field, reduxForm} from 'redux-form';

/**
* Modal of project
*/
class LoginForm extends React.Component {
  /**
   * render Footer
   * @return {html} The template of Footer class
   */
  render() {
    const {loginError} = this.props.payload.userReducer;
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-md-3">
          <Field className="form-control" name="email" component="input" required type="text" placeholder="Email" />
        </div>
        <div className="form-group">
          <Field className="form-control" name="password" component="input" required type="password" placeholder="Password" />
        </div>
        {loginError ? <div style={{marginBottom: 10, color: 'red'}}>{loginError}</div> : null}
        <button className="btn btn-primary rounded-0" type="submit">Login</button>
      </form>
    );
  }
};

export default reduxForm({
  form: 'loginForm', // a unique identifier for this form
})(LoginForm);
