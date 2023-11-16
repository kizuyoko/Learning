import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

function EditEventPage() {
  // Not useLoaderData() because the data is loaded in a parent.
  const data = useRouteLoaderData('event-detail');

  return (
      <EventForm event={data.event} />
  );
} 
export default EditEventPage;