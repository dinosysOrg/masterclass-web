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
      <div>
        <div className="text-center mt-2 mb-5">
          <img className="rounded-circle" alt="images teacher" src="http://via.placeholder.com/120x120"/>
          <div className="mt-4"><button className="btn btn-primary">UPLOAD NEW PROFILE PICTURE</button></div>
        </div>
        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="form-group row">
            <label htmlFor="first_name" className="col-3 col-form-label text-right">First Name</label>
            <div className="col-9">
              <Field name="first_name" component="input" type="text" placeholder="First Name"/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="last_name" className="col-3 col-form-label text-right">Last Name</label>
            <div className="col-9">
              <Field name="last_name" component="input" type="text" placeholder="Last Name"/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="email" className="col-3 col-form-label text-right">Email</label>
            <div className="col-9">
              <Field name="email" component="input" type="text" placeholder="Email" disabled="true"/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="gender" className="col-3 col-form-label text-right">Gender</label>
            <div className="col-9">
              <select className="custom-select mb-2 mr-sm-2 mb-sm-0" id="gender">
                <option selected>Please select gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="birthday" className="col-3 col-form-label text-right">Birthday</label>
            <div className="col-9">
              <Field name="birthday" component="input" type="date" placeholder="Birthday"/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="phone" className="col-3 col-form-label text-right">Phone Number</label>
            <div className="col-9">
              <Field name="phone" component="input" type="number" placeholder="Phone"/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="school" className="col-3 col-form-label text-right">School</label>
            <div className="col-9">
              <Field name="school" component="input" type="text" placeholder="School"/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="occupation" className="col-3 col-form-label text-right">Occupation</label>
            <div className="col-9">
              <Field name="occupation" component="input" type="text" placeholder="Occupation"/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="personalInterest" className="col-3 col-form-label text-right">Personal Interest</label>
            <div className="col-9">
              <Field name="personalInterest" component="input" type="text" placeholder="Tell us anything about your personal interest"/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="instrument" className="col-3 col-form-label text-right">Instrument</label>
            <div className="col-9">
              <select className="custom-select mb-2 mr-sm-2 mb-sm-0" id="instrument">
                <option selected>Please select instrument</option>
                <option value="1">Guitar</option>
                <option value="2">Violin</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-3"></div>
            <div className="col-9">
             <button className="btn btn-primary rounded-0" type="submit">SAVE</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

ProfileForm = reduxForm({
  form: 'initializeFromState', // a unique identifier for this form
})(ProfileForm);
export default ProfileForm;
