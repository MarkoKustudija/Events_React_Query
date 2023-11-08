import Events from "../src/components/Events/Events";

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import NewEvent from "./components/Events/NewEvent";
import EventDetails from "./components/Events/EventDetails";
import EditEvent, {loader as editEventLoader, action as editEventAction} from "./components/Events/EditEvent";
import { QueryClientProvider } from "@tanstack/react-query";
import {queryClient} from '../src/util/http';
// import { loader as editEventLoader, action as editEventAction } from "./util/loader_action";

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
  {
    path: "/events/:id",
    element: <EventDetails />,
    children: [
      {
        path: "/events/:id/edit",
        element: <EditEvent />,
        loader: editEventLoader,
        action: editEventAction
      },
    ],
  },
]);

// const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
