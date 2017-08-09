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
        <Field name="email" component="input" required type="text" placeholder="Email" />
        <Field name="password" component="input" required type="password" placeholder="Password" />
        <Field name="password_confirmation" component="input" required type="password" placeholder="Confirm Password" />
        {signUpError ? <ul>{this.loginError()}</ul> : null}
        <button className="btn waves-effect waves-light" type="submit">Create Account</button>
      </form>
    );
  }
};

export default reduxForm({
  form: 'signUpForm', // a unique identifier for this form
})(SignUpForm);
