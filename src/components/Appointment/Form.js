import React, {useState} from 'react'
import InterviewerList from 'components/InterviewerList'
import Button from 'components/Button'


function Form(props) {
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [name, setName] = useState(props.name || '');
  const [error, setError] = useState('');

  function validate() {
    if (name === '') {
      setError('Student name cannot be blank');
      return;
    }
    if (!interviewer) {
      setError('Please select an interviewer');
      return;
    }

    setError('');
    props.onSave(name, interviewer);
  }

    // Reset details; passed to cancel
    const reset = function() {
      setName('');
      setError('');
      setInterviewer(null);
    };

    const cancel = function() {
      reset()
      props.onCancel()
    };
  return (
    <main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form autoComplete={event => event.preventDefault()}>
      <input
        className="appointment__create-input text--semi-bold"
        name="name"
        type="text"
        placeholder="Enter Student Name"
        value= {name}
        onChange={event => setName(event.target.value)}
        data-testid="student-name-input"
        
        /*
          This must be a controlled component
          your code goes here
        */
      />
      <section className="appointment__validation">{error}</section>
    </form>
    <InterviewerList 
       interviewers={props.interviewers}
       interviewer={interviewer}
       setInterviewer={setInterviewer}
    />
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick ={cancel}>Cancel</Button>
      <Button confirm onClick={validate}>Save</Button>
    </section>
  </section>
</main>
  )
}

export default Form
