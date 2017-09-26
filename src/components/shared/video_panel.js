import React from 'react';
import {formatArrayData} from '../../configs/data.config';
import PropTypes from 'prop-types';
import FullVideoCatalog from '../../components/shared/full_video_catalog';

 export default class VideoPanel extends React.Component {
  render () {
    const {paths} = this.props.payload.pathReducer;
    return (
      <div>
        {paths.recommend.length !== 0 ? <FullVideoCatalog {...this.props} settingSlide={this.props.settingSlide} title={this.context.t('recommend')} data={formatArrayData(paths.recommend, paths.my_skills)} /> : null}        
        {paths.popular.length !== 0 ? <FullVideoCatalog {...this.props} settingSlide={this.props.settingSlide} title={this.context.t('popular')} data={formatArrayData(paths.popular, paths.my_skills)} /> : null}
        {paths.latest.length !== 0 ? <FullVideoCatalog {...this.props} settingSlide={this.props.settingSlide} title={this.context.t('lastest')} data={formatArrayData(paths.latest, paths.my_skills)} /> : null}
        {paths.guitar.length !== 0 ? <FullVideoCatalog {...this.props} settingSlide={this.props.settingSlide} title={this.context.t('guitar')} data={formatArrayData(paths.guitar, paths.my_skills)} /> : null}
        {paths.vocals.length !== 0 ? <FullVideoCatalog {...this.props} settingSlide={this.props.settingSlide} title={this.context.t('vocals')} data={formatArrayData(paths.vocals, paths.my_skills)} /> : null}
      </div>
    )
  }
}

VideoPanel.contextTypes = {
  t: PropTypes.func.isRequired,
};