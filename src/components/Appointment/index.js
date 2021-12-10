import React from 'react'
import 'components/Appointment/styles.scss'
import Header from './Header'
import Empty from './Empty'
import Show from './Show'
import { Fragment } from 'react'



function Appointment(props) {
  function Interviewer(props) {
    const interview = props.interview;
    console.log(interview)
    if (!interview) {
      return <Empty />;
    }
    return <Show student={props.student} interviewer={props.interview}/>;
  }

  return (
    
    <article className="appointment">
      <Header time={props.time}/>
   <Interviewer interview={props.interview} />
    </article>
    
  )
  

  }
export default Appointment
