import Events from "../src/components/Events/Events";
import "./App.css";

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
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
