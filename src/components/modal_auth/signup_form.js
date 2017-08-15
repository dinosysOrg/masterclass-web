import React from 'react';
import {Field, reduxForm} from 'redux-form';

/**
* Modal of project
*/
class SignUpForm extends React.Component {
  /**
   * login error
   * @return {any} values
   */
  loginError() {
    const {signUpError} = this.props.payload.userReducer;
    return signUpError.map((data, i) =>
      <li style={{color: 'red'}} key={i}>- {data}</li>
    );
  }
  /**
   * render Footer
   * @return {html} The template of Footer class
   */
  render() {
    const {signUpError} = this.props.payload.userReducer;
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-md-3">
          <Field className="form-control" name="email" component="input" required type="text" placeholder="Email" />
        </div>
        <div className="form-group">
          <Field className="form-control" name="password" component="input" required type="password" placeholder="Password" />
        </div>
        <div className="form-group">
          <Field className="form-control" name="password_confirmation" component="input" required type="password" placeholder="Confirm Password" />
        </div>
        {signUpError ? <ul className="list-unstyled">{this.loginError()}</ul> : null}
        <button className="btn btn-primary rounded-0" type="submit">Create Account</button>
      </form>
    );
  }
};

export default reduxForm({
  form: 'signUpForm', // a unique identifier for this form
})(SignUpForm);
