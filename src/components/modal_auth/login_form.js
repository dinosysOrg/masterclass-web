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
        <Field name="email" component="input" required type="text" placeholder="Email" />
        <Field name="password" component="input" required type="password" placeholder="Password" />
        {loginError ? <div style={{marginBottom: 10, color: 'red'}}>{loginError}</div> : null}
        <button className="btn waves-effect waves-light" type="submit">Login</button>
      </form>
    );
  }
};

export default reduxForm({
  form: 'loginForm', // a unique identifier for this form
})(LoginForm);
