import React from 'react';
import {Field, reduxForm} from 'redux-form';

/**
* Modal of project
*/
class QuizForm extends React.Component {
  /**
   * render Footer
   * @return {html} The template of Footer class
   */
  render() {
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <p>2. Choose your level (optional):</p>
        {/* <label className="form-check-label">
          <Field className="form-check-input" name="exampleRadios" id="exampleRadios1" component="input" type="radio" value="male" />
          Male
        </label>
        <label className="form-check-label">
          <Field className="form-check-input" name="exampleRadios" id="exampleRadios1" component="input" type="radio" value="female" />
          Female
        </label> */}
        <div className="form-check form-check-inline">
          <label className="form-check-label">
            <Field className="form-check-input" name="exampleRadios" id="exampleRadios1" component="input" type="radio" value="male"/> Beginner
          </label>
        </div>
        <div className="form-check form-check-inline">
          <label className="form-check-label">
            <Field className="form-check-input" name="exampleRadios" id="exampleRadios2" component="input" type="radio" value="fmale" /> Intermediate
          </label>
        </div>
        <p>3. Choose your preferred learning method (choose all that applies):</p>
        <div className="form-check form-check-inline">
          <label className="form-check-label">
            <Field className="form-check-input" name="checkbox" id="checkbox1" component="input" type="checkbox"/> Techniques
          </label>
        </div>
        <div className="form-check form-check-inline">
          <label className="form-check-label">
            <Field className="form-check-input" name="checkbox2" id="checkbox2" component="input" type="checkbox"/> abc
          </label>
        </div>
        <button>FIND PATH</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'quizForm', // a unique identifier for this form
  initialValues: {checkbox: true, exampleRadios: 'fmale'},
})(QuizForm);
