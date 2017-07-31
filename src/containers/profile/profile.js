import React, {Component} from 'react';
/**
 * Profile of project
 */
class Profile extends Component {
  /**
   * render Profile template
   * @return {html} The template of Profile class
   */
  render() {
    return (
      <div className="profile-page">
        <div className="container">
          <img src="http://via.placeholder.com/150?text=avatart" />
          <a href="#" className="btn">Edit</a>
          <form>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
            <input type="date" />
            <div className="input-field col s12">
              <select className="browser-default">
                <option value="m">Male</option>
                <option value="f">Female</option>
              </select>
            </div>
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone" />
            <input type="text" placeholder="School" />
            <input type="text" placeholder="Occupation" />

            <textarea value="" rows="10" className="materialize-textarea">
              Tell us anything about your personal interests.
            </textarea>

            <input type="text" placeholder="Instruments" />
            <textarea value="" rows="10" className="materialize-textarea">
              Tell us anything about your musical instruments.
            </textarea>
          </form>

          <form>
            <input type="text" placeholder="Name in Card" />
            <input type="text" placeholder="Card Type" />
            <input type="number" placeholder="Card Number" />
            <input type="month" />
            <input type="text" placeholder="CCV" />
            <input className="btn" type="submit" value="Save" />
          </form>
        </div>
      </div>
    );
  }
}

export default Profile;
