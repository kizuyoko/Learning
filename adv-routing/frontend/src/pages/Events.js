import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  //Connects to App.js loader, a feacher of React Router.
  const events = useLoaderData();

  return (
    <EventsList events={events} />
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    
  } else {
    const resData = await response.json();
    return resData.events;
  }
}