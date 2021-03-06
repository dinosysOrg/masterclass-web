import React from 'react';
import {Field, reduxForm} from 'redux-form';
// import * as Icon from 'react-icons/lib/fa/';
import Icon from '../../components/shared/icon'

/**
* Modal of project
*/
class QuizForm extends React.Component {
  checkIcon(name) {
    if (name === 'Guitar') {
      return 'guitar'
    } else if (name === 'Piano') {
      return 'piano'
    } else if (name === 'Vocals') {
      return 'micRecord'
    }
  }
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
            {
              quiz.instruments.map(function(quizInstruments, index) {
                if(quizInstruments.id !== 4) {
                  return(
                    <div className="quizList" key={index}>
                      <label className="custom-control custom-radio cursorMouse">
                      <Field className="custom-control-input" name="quizInstruments" id={`Intruments${index}`}
                        component="input" type="radio" value={String(quizInstruments.id)}/>
                        <span className="instrument-block text-center">
                          <span className="custom-control-description-quiz">
                            <Icon name={`${this.checkIcon(quizInstruments.name)} iconInstruments`} size={35} fill="#fff" />
                          </span>
                          <span className="custom-control-description-txt">{quizInstruments.name}</span>
                        </span>
                      </label>
                    </div>
                  )
                }
              }.bind(this))
            }
          </div>
        <p>2. Choose your level (optional):</p>
        <div className="row pb-2">
          {quiz.levels.map((quizLevel, index) =>
            <div key={index} className="quizList">
              <label className="custom-control custom-radio cursorMouse">
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
              <label className="custom-control custom-checkbox cursorMouse">
                <Field type="checkbox" component="input" id={`quizCheckbox_${index+1}`} name={`quizCheckbox_${index+1}`} value={String(quizMethod.id)} className="custom-control-input"/>
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">{quizMethod.name}</span>
              </label>
            </div>
          )}
        </div>
        <div className="mt-4 ml-2"><button className="btn btn-primary px-5 cursorMouse">FIND PATH</button></div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'quizForm', // a unique identifier for this form
})(QuizForm);