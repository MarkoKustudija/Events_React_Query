import Events from "../src/components/Events/Events";
import EventForm from "../src/components/Events/EventForm";

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/events" />,
  },
  {
    path: "/events",
    element: <Events />,

    children: [
      {
        path: "/events/new",
        element: <EventForm />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
