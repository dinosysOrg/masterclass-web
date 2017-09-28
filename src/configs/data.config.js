import * as _ from 'lodash';
import * as IMG from '../assets/images';

function checkImg(data) {
  if (data.name.includes('Vocals') === true) {
    return IMG.default.vocalImg
  } else if (data.name.includes('Guitar') === true) {
    return IMG.default.guitarImg
  } else if (data.name.includes('Piano') === true) {
    return IMG.default.pianoImg
  }
}
function formatData(data, myskill) {
  let skill = _.map(data.instrument.instrument_skills, function(intrumentSkill){
    return _.extend(intrumentSkill, _.find(data.path_skills, { id: intrumentSkill.id }))
  })
  let skillWithUser = _.map(skill, function(skillItem){
    return _.extend(skillItem, _.find(myskill, { id: skillItem.id }))
  })
  skillWithUser = _.map(skillWithUser, function(skillItem){
    return {
      subject: skillItem.name,
      A: skillItem.path_level || 0,
      B: skillItem.user_level || 0,
      full: skillItem.instrument_level
    }
  })
  let IMG = checkImg(data)
  return {
    id: data.id,
    title: data.name,
    description: data.description,
    level: `${data.level.name} ${data.instrument.name}`,
    instructor: data.teacher.name,
    imgSrc: IMG,
    skill: skillWithUser
  }
}

function formatArrayData (data, myskills) {
  let dataReformat = _.map(data, function(item){
    return formatData(item, myskills);
  })
  return dataReformat;
}

function formatDataMyPath (data, myskills) {
  return formatData(data, myskills);
}

function countPercent(x, y) {
  return Math.floor((x/y)*100)
}

function formatDataOverall(overallProgress) {
  const {total_syllabuses, total_exercises, total_sheets, total_awards} = overallProgress.total_progresses
  const {count_syllabuses_completed, count_assignments_submitted, count_sheets_downloaded, awards_earned, count_hours_practices} = overallProgress.current_progresses
  let overall = {}
  overall.todalProgresses = [
      {
        name: 'syllabuses',
        status: 'completed',
        total: total_syllabuses,
        completed: count_syllabuses_completed,
        percent: countPercent(count_syllabuses_completed, total_syllabuses) ? countPercent(count_syllabuses_completed, total_syllabuses) : 0
      },
      {
        name: 'assignments',
        status: 'submitted',
        total: total_exercises,
        completed: count_assignments_submitted,
        percent: countPercent(count_assignments_submitted, total_exercises) ? countPercent(count_assignments_submitted, total_exercises) : 0
      },
      {
        name: 'sheets',
        status: 'downloaded',
        total: total_sheets,
        completed: count_sheets_downloaded,
        percent: countPercent(count_sheets_downloaded, total_sheets) ? countPercent(count_sheets_downloaded, total_sheets) : 0
      }
  ]
  const skills = _.merge(overallProgress.my_skills, overallProgress.skills);
  const formatSkills = _.filter(skills, (val) => val.instrument_id || val.instrument_level );
  overall.totalAwards = total_awards
  overall.listAwards = awards_earned
  overall.mySkills = formatSkills
  overall.housrPractice = count_hours_practices
   return overall
}

function coverSecondToMinutes(data) {
  let divisor_for_minutes = data % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60);
  let divisor_for_seconds = divisor_for_minutes % 60;
  let formattedSecond = ("0" + Math.ceil(divisor_for_seconds)).slice(-2);
  return `${minutes}:${formattedSecond}`;
}

export {
  formatArrayData,
  formatDataMyPath,
  formatDataOverall,
  coverSecondToMinutes
}
