import React from 'react';
import {Field, reduxForm} from 'redux-form';

/**
* Modal of project
*/
class ProfileForm extends React.Component {
  /**
   * render Footer
   * @return {html} The template of Footer class
   */
  render() {
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name</label>
          <div className="col-sm-10">
            <Field name="firstName" component="input" type="text" placeholder="First Name"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name</label>
          <div className="col-sm-10">
            <Field name="lastName" component="input" type="text" placeholder="Last Name"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <Field name="email" component="input" type="text" placeholder="Email"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="birthday" className="col-sm-2 col-form-label">Birthday</label>
          <div className="col-sm-10">
            <Field name="birthday" component="input" type="text" placeholder="Birthday"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="PhoneNumber" className="col-sm-2 col-form-label">PhoneNumber</label>
          <div className="col-sm-10">
            <Field name="PhoneNumber" component="input" type="text" placeholder="PhoneNumber"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="School" className="col-sm-2 col-form-label">School</label>
          <div className="col-sm-10">
            <Field name="School" component="input" type="text" placeholder="School"/>
          </div>
        </div>
        <button className="btn btn-primary rounded-0" type="submit">Update</button>
      </form>
    );
  }
}

ProfileForm = reduxForm({
  form: 'initializeFromState', // a unique identifier for this form
})(ProfileForm);
export default ProfileForm;
