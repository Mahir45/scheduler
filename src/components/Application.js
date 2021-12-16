import React from "react";
import DayList from "./DayList";
import Appointment from "./Appointment";
import {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay,
} from "helpers/selectors";
import useApplicationData from "helpers/hooks/useApplicationData";

import "components/Application.scss";

export default function Application(props) {
  const { state, bookInterview, cancelInterview, setDay } =
    useApplicationData();

  const dailyAppointments = getAppointmentsForDay(state, state.day);

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} value={state.day} onChange={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {dailyAppointments.map((appointment) => (
          <>
            <Appointment
              key={appointment.id}
              id={appointment.id}
              time={appointment.time}
              interview={getInterview(state, appointment.interview)}
              interviewers={getInterviewersForDay(state, state.day)}
              bookInterview={bookInterview}
              cancelInterview={cancelInterview}
            />
          </>
        ))}

        <Appointment time="5pm" />
      </section>
    </main>
  );
}
