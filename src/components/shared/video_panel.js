import React from 'react';
import {formatArrayData} from '../../configs/data.config';
import PropTypes from 'prop-types';
import FullVideoCatalog from '../../components/shared/full_video_catalog';

 export default class VideoPanel extends React.Component {
  render () {
    let data = this.props.data;
    return (
      <div>
        {data.popular.length !== 0 ? <FullVideoCatalog settingSlide={this.props.settingSlide} title={this.context.t('popular')} data={formatArrayData(data.popular)} location={this.props.location} /> : null}
        {data.latest.length !== 0 ? <FullVideoCatalog settingSlide={this.props.settingSlide} title={this.context.t('lastest')} data={formatArrayData(data.latest)} location={this.props.location} /> : null}
        {data.guitar.length !== 0 ? <FullVideoCatalog settingSlide={this.props.settingSlide} title={this.context.t('guitar')} data={formatArrayData(data.guitar)} location={this.props.location} /> : null}
        {data.vocals.length !== 0 ? <FullVideoCatalog settingSlide={this.props.settingSlide} title={this.context.t('vocals')} data={formatArrayData(data.vocals)} location={this.props.location} /> : null}
      </div>
    )
  }
}

VideoPanel.contextTypes = {
  t: PropTypes.func.isRequired,
};