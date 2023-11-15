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