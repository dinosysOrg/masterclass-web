import React, {Component} from 'react';
import VideoSlide from './video_slide';
import {formatArrayData} from '../../configs/data.config';
import Loading from '../loading/loading';

let settingSlide = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: false,
  focusOnSelect: false,
}

class Search extends Component {
  /**
   * Represent "Search" component
   * @constructor
   */
  constructor() {
    super();
    this.state = {
      searchStatus: false,
      searchText: '',
    };
    this._handleChange = this._handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }
  _handleChange(e) {
    this.setState({searchText: e.target.value});
  }
  keyPress(e){
    if(e.keyCode === 13){
      this.setState({searchText: e.target.value, searchStatus: true});
      this.props.pathAction.searchPath(e.target.value)
    }
  }
  checkLoadingSearch(){
    let {search} = this.props.payload.pathReducer.paths;
    let {showLoading} = this.props.payload.initReducer;
    if (showLoading){
      return <Loading/>
    } else {
      if(search.length === 0 && this.state.searchStatus) {
        return (
          <div className="search-no-result text-center mt-5 mb-5">Không tìm thấy kết quả phù hợp !</div>
        )
      } else if (search.length !== 0){
        return(
          <div className="pathRow mb-5 mt-5">
            <div className="container">
              <h3 className="mb-3 pathRow__title">SEARCH RESULTS</h3>
            </div>
            <VideoSlide settingSlide={settingSlide} data={formatArrayData(search)}/>
          </div>
        )
      }
    }
  }
  /**
   * Render this component
   * @return {Component}  component - a react component
   */
  render() {
    return (
      <div>
        <div className="container text-center">
          <input className="search-input" type="text" value={this.state.searchText} placeholder="Type something to search" onChange={this._handleChange} onKeyDown={this.keyPress} />
        </div>
        {this.checkLoadingSearch()}
      </div>
    );
  }
}

export default Search;
