import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./pages/Root";
import EventsRootLayout from "./pages/EventsRoot";
import { loader } from "./pages/Events";

const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage />}, 
      // loader is a new feacher of React Router. 
      { 
        path: 'events', 
        element: <EventsRootLayout />, 
        children: [
          { 
            index: true, 
            element: <EventsPage />, 
            loader: eventsLoader,
          },
          { path: ':eventId', element: <EventDetailPage />},
          { path: 'new', element: <NewEventPage />},
          { path: ':eventId/edit', element: <EditEventPage />}
        ]
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
