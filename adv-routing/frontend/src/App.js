import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventDetailPage, { loader as eventsDetailLoader } from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./pages/Root";
import EventsRootLayout from "./pages/EventsRoot";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />}, 
      { 
        path: 'events', 
        element: <EventsRootLayout />, 
        children: [
          { 
            index: true, 
            element: <EventsPage />, 
            // 'loader' is a new feature of React Router. It excutes when you go to event page, not when you just open the app. No useEffect needed. 'eventsLoader' is in Event.js, named 'loader'. You should not use in higher level like in root.
            loader: eventsLoader,
          },
          { 
            path: ':eventId', 
            element: <EventDetailPage />,
            loader: eventsDetailLoader
          },
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
