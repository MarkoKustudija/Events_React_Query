import Events from "../src/components/Events/Events";

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import NewEvent from "./components/Events/NewEvent";

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
        element: <NewEvent />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
