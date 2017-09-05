import React, {Component} from 'react';
import ProfileForm from './profile_form';
import './profile.style.css';
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
    const {first_name} = this.props.payload.userReducer.userInfo;
    const {last_name} = this.props.payload.userReducer.userInfo;
    const {gender} = this.props.payload.userReducer.userInfo;
    const {birthday} = this.props.payload.userReducer.userInfo;
    const {phone} = this.props.payload.userReducer.userInfo;
    const {school} = this.props.payload.userReducer.userInfo;
    const {occupation} = this.props.payload.userReducer.userInfo;
    const formValue = {
      initialValues: {
        email, first_name, last_name, gender, birthday, phone, school, occupation,
      },
    };
    return (
      <ProfileForm {...formValue} onSubmit={(values)=> this.onSubmit(values)}/>
    );
  }
}

export default Profile;
