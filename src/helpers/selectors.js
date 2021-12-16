export function getAppointmentsForDay(state, day) {
   const daysNew = state.days.filter(dayOfTheWeek => {  return dayOfTheWeek.name === day })
if (daysNew.length === 0 ) {
  return []
}
const one = daysNew[0].appointments
 const appMap = one.map ((appointment)=> {
  return state.appointments[appointment]
 })
 return appMap
}

export function getInterview(state, interview) {
  let interviewersObj = state.interviewers;
  let result = {};

  if(!interviewersObj || !interview){
    return null;
  }

  for(const key of Object.keys(interviewersObj)){
    let interviewer = interviewersObj[key];
    if(interviewer.id === interview.interviewer){
      result["interviewer"] = interviewer;
      result["student"] = interview.student;
    }
  }
  return result;
}
export function getInterviewersForDay(state, day) {
  
  const filteredDays = state.days.filter((singleDay) => { 
    return singleDay.name === day
    })

  if (filteredDays.length === 0) {
    return [];
  } 
 
  const interviewersMapped = filteredDays[0].interviewers.map((key) => {
   
    return (state.interviewers[key])
  })

  return interviewersMapped;
}