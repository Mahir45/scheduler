import React from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Form from "./Form";
import Status from "./Status";
import { useVisualMode } from "helpers/hooks/useVisualMode";
import Confirm from "./Confirm";
import Error from "./Error";

const EMPTY = "Empty";
const SHOW = "Show";
const CREATE = "Create";
const FORM = "Form";
const ERROR_SAVE = "ERROR_SAVE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  function deleteInterview() {
    if (mode === CONFIRM) {
      transition(DELETING, true);
      props
        .cancelInterview(props.id)
        .then(() => transition(EMPTY))
        .catch(() => transition(ERROR_DELETE, true));
    } else {
      transition(CONFIRM);
    }
  }

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);
    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch(() => transition(ERROR_SAVE, true));
  }
  function edit() {
    transition(EDIT);
  }
  return (
    <article className="appointment">
      <Header time={props.time} />

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={deleteInterview}
          onEdit={edit}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
          onDelete={deleteInterview}
        />
      )}
      {mode === SAVING && <Status message="Saving" />}
      {mode === DELETING && <Status message="Deleting" />}
      {mode === CONFIRM && (
        <Confirm
          onCancel={back}
          onConfirm={deleteInterview}
          message="Are you sure you would like to delete this Interview?"
        />
      )}
      {mode === EDIT && (
        <Form
          name={props.name ? props.name : props.interview.student}
          value={props.value ? props.value : props.interview.interviewer.id}
          interviewers={props.interviewers}
          onSave={save}
          onCancel={back}
          onEdit={edit}
        />
      )}
      {mode === ERROR_SAVE && (
        <Error message="Could not create appointment" onClose={back} />
      )}
      {mode === ERROR_DELETE && (
        <Error message="Could not cancel appointment" onClose={back} />
      )}
    </article>
  );
}
