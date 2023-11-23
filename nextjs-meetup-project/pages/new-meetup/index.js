import NewMeetupForm from '../../components/meetups/NewMeetupForm';
export default function NewMeetUpPage() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  );
} 