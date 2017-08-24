import React from 'react';
import {Field, reduxForm} from 'redux-form';

/**
* Modal of project
*/
class QuizForm extends React.Component {
  /**
   * render QuizForm
   * @return {html} The template of QuizForm class
   */
  render() {
    const {handleSubmit} = this.props;
    const {quiz} = this.props.payload.userReducer;
    return (
      <form onSubmit={handleSubmit}>
        <p>1. Choose your preferred instrument:</p>
        {quiz.instruments.map((quizInstruments, index) =>
          <div key={index} className="form-check form-check-inline">
            <label className="form-check-label">
              <Field className="form-check-input" name="quizInstruments" id={`Intruments${index}`}
                component="input" type="radio" value={String(quizInstruments.id)}/> {quizInstruments.name}
            </label>
          </div>
        )}
        <p>2. Choose your level (optional):</p>
        {quiz.levels.map((quizLevel, index) =>
          <div key={index} className="form-check form-check-inline">
            <label className="form-check-label">
              <Field className="form-check-input" name="quizLevelRadio" id={`quizLevelRadio${index}`}
                component="input" type="radio" value={String(quizLevel.id)}/> {quizLevel.name}
            </label>
          </div>
        )}
        <p>3. Choose your preferred learning method (choose all that applies):</p>
        {quiz.learning_methods.map((quizMethod, index) =>
          <div key={index} className="form-check form-check-inline">
            <label className="form-check-label">
              <Field className="form-check-input" name={`quizMethod_${quizMethod.id}`} id={`quizMethod${index}`}
                component="input" type="checkbox" /> {quizMethod.name}
            </label>
          </div>
        )}
        <div><button>FIND PATH</button></div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'quizForm', // a unique identifier for this form
  initialValues: {quizLevelRadio: '1', quizInstruments: '1'},
})(QuizForm);
