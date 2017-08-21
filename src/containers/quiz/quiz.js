import React, {Component} from 'react';

/**
 * Quiz of project
 */
class Quiz extends Component {
  /**
   * render Quiz template
   * @return {html} The template of Quiz class
   */
  render() {
    return (
      <div className="quiz-page">
        <div className="container">
          <h3 className="text-center">Choose one answer in each of the following question to find your own path of learning music. </h3>
          <p>1. Choose your preferred instrument:</p>
          <ul>
            <li>GUITAR</li>
            <li>PIANO</li>
            <li>VOICE</li>
          </ul>
          <p>2. Choose your level (optional):</p>
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
              Beginner
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
              Intermediate
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
              Advanced
            </label>
          </div>
          <p>3. Choose your preferred learning method (choose all that applies):</p>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" /> Techniques
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" /> Through songs
            </label>
          </div>
          <button>FIND PATH</button>
        </div>
      </div>
    );
  }
}

export default Quiz;
