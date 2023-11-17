import { useLoaderData, json, defer, Await } from 'react-router-dom';
import EventsList from '../components/EventsList';
import { Suspense } from 'react';

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: 'center '}}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events' };
    
    // Response is JS feature
    // throw new Response(JSON.stringfy({ message: 'Could not fetch events.' }), 
    //   { status: 500 }
    // );

    // json is a React Router feature for throw new Response(JSON.stringfy(message, state)), above. You do not need JSON .parse in Error.js.
    return json(
      { message: 'Could not fetch events.' },
      { status: 500 }
    );

  } else {
    //const resData = await response.json();
    //return resData.events;
    //const res = new Response('any data', {status: 201});
    const resData = await response.json();
    return resData.events;
  }
} 

// This connects to loader (new feature of React Router) in App.js.
export function loader() {
  return defer({
   events: loadEvents() 
  })
}