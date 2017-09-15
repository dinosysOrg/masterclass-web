import * as _ from 'lodash';

function formatData(data) {
  let skill = _.map(data.instrument.instrument_skills, function(intrumentSkill){
    return _.extend(intrumentSkill, _.find(data.path_skills, { id: intrumentSkill.id }))
  })
  skill = _.map(skill, function(skillItem){
    return {
      subject: skillItem.name,
      A: skillItem.path_level || 0,
      B: skillItem.user_level || 0,
      full: skillItem.instrument_level
    }
  })
  return {
    id: data.id,
    title: data.name,
    description: data.description,
    level: `${data.level.name} ${data.instrument.name}`,
    instructor: data.teacher.name,
    imgSrc: 'https://allwallpapers.info/wp-content/uploads/2016/05/8081-playing-the-guitar-1920x1080-music-wallpaper.jpeg',
    skill: skill
  }
}

function formatArrayData (data) {
  let dataReformat = _.map(data, function(item){
    return formatData(item);
  })
  return dataReformat;
}

function formatDataMyPath (data) {
  return formatData(data);
}

export {
  formatArrayData,
  formatDataMyPath,
}
