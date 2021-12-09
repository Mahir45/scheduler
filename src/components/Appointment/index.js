import React from 'react'
import 'components/Appointment/styles.scss'

function Appointment(props) {
  return (
    <article className="appointment">{props.time}</article>
  )
}

export default Appointment
