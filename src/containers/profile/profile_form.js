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
          <label htmlFor="first_name" className="col-sm-2 col-form-label">First Name</label>
          <div className="col-sm-10">
            <Field name="first_name" component="input" type="text" placeholder="First Name"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="last_name" className="col-sm-2 col-form-label">Last Name</label>
          <div className="col-sm-10">
            <Field name="last_name" component="input" type="text" placeholder="Last Name"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <Field name="email" component="input" type="text" placeholder="Email" disabled="true"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="gender" className="col-sm-2 col-form-label">Gender</label>
          <div className="col-sm-10">
            <label><Field name="gender" component="input" type="radio" value="1"/> Male</label>
            <label><Field name="gender" component="input" type="radio" value="0"/> Female</label>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="birthday" className="col-sm-2 col-form-label">Birthday</label>
          <div className="col-sm-10">
            <Field name="birthday" component="input" type="date" placeholder="Birthday"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
          <div className="col-sm-10">
            <Field name="phone" component="input" type="number" placeholder="Phone"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="school" className="col-sm-2 col-form-label">School</label>
          <div className="col-sm-10">
            <Field name="school" component="input" type="text" placeholder="School"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="occupation" className="col-sm-2 col-form-label">Occupation</label>
          <div className="col-sm-10">
            <Field name="occupation" component="input" type="text" placeholder="Occupation"/>
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
