import { useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>Event Detail Page, {params.eventId}</h1>
    </>
  );
} 
export default EventDetailPage;