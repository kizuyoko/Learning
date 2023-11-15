import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
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
      // 'loader' is a new feacher of React Router. It excutes when you go to event page, not when you just open the app.
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
