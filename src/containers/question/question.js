import React, { Component } from "react";
import QuestionText from './question_text';
import QuestionVideo from './question_video';
import QuestionSelect from './question_select';
class Question extends Component {
  
  _renderQuestion() {
    const {question_type} = this.props.params;
    switch(question_type) {
      case undefined:
        return <QuestionSelect {...this.props}/>
      case 'record': 
        return <div>TO BE IMPLEMENTED</div>
      case 'upload':
        return <QuestionVideo/>
      case 'write': 
        return <QuestionText/>
      default:
        return null;
    }
  }

  selectType(id) {
    this.setState({questionType: id});
  }

  render() {
    return (
      <div>
        {this._renderQuestion()}
      </div>
    )
  }
}

export default Question;