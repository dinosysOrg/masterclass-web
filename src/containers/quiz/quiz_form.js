import React from 'react';
import {Field, reduxForm} from 'redux-form';
import * as Icon from 'react-icons/lib/fa/';

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
      <form className="formQuiz" onSubmit={handleSubmit}>
        <p>1. Choose your preferred instrument:</p>
          <div className="row pb-2">
            {quiz.instruments.map((quizInstruments, index) =>
              <div className="quizList" key={index}>
                <label className="custom-control custom-radio">
                <Field className="custom-control-input" name="quizInstruments" id={`Intruments${index}`}
                  component="input" type="radio" value={String(quizInstruments.id)}/>
                  <span className="instrument-block text-center">
                    <span className="custom-control-description-quiz">
                      <Icon.FaMusic className="iconInstruments" size={35} fill="#fff" />
                    </span>
                    <span className="custom-control-description-txt">{quizInstruments.name}</span>
                  </span>
                </label>
              </div>
            )}
          </div>
        <p>2. Choose your level (optional):</p>
        <div className="row pb-2">
          {quiz.levels.map((quizLevel, index) =>
            <div key={index} className="quizList">
              <label className="custom-control custom-radio">
              <Field className="custom-control-input" name="quizLevelRadio" id={`quizLevelRadio${index}`}
                component="input" type="radio" value={String(quizLevel.id)}/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">{quizLevel.name}</span>
              </label>
            </div>
          )}
        </div>
        <p>3. Choose your preferred learning method (choose all that applies):</p>
        <div className="row pb-2">
          {quiz.learning_methods.map((quizMethod, index) => 
            <div key={index} className="quizList">
              <label className="custom-control custom-checkbox">
                <Field type="checkbox" component="input" id={`quizCheckbox_${index+1}`} name={`quizCheckbox_${index+1}`} value={String(quizMethod.id)} className="custom-control-input"/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">{quizMethod.name}</span>
              </label>
            </div>
          )}
        </div>
        <div className="mt-4 ml-2"><button className="btn btn-primary px-5">FIND PATH</button></div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'quizForm', // a unique identifier for this form
})(QuizForm);
