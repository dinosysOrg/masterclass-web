import * as _ from 'lodash';

export default function formatDataResponse (data) {
  let dataReformat = _.map(data, function(item){
    let skill = _.map(item.instrument.instrument_skills, function(intrumentSkill){
      return _.extend(intrumentSkill, _.find(item.path_skills, { id: intrumentSkill.id }))
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
      id: item.id,
      title: item.name,
      description: item.description,
      level: `${item.level.name} ${item.instrument.name}`,
      instructor: item.teacher.name,
      imgSrc: 'https://allwallpapers.info/wp-content/uploads/2016/05/8081-playing-the-guitar-1920x1080-music-wallpaper.jpeg',
      skill: skill
    }
  })
  return dataReformat;
}
