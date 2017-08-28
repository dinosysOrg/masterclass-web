import React, {Component} from 'react';
import ProfileForm from './profile_form';
/**
 * Profile of project
 */
class Profile extends Component {
  /**
   * check loading status
   * @param {object} values
   */
  onSubmit(values) {
    this.props.userAction.saveUserInfoRequest(values);
  }
  /**
   * render Profile template
   * @return {html} The template of Profile class
   */
  render() {
    const {email} = this.props.payload.userReducer.userInfo;
    const formValue = {
      initialValues: {
        email,
      },
    };
    return (
      <ProfileForm {...formValue} onSubmit={(values)=> this.onSubmit(values)}/>
    );
  }
}

export default Profile;
