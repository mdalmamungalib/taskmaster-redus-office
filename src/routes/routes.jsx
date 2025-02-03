import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Tasks from "../pages/Tasks";
import Chat from "../pages/Chat";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Archive from "../pages/Archive";
import SignUp from "../components/ui/SignUp";
import Loading from "../components/ui/Loading";
import PrivetRoute from "../components/layouts/PrivetRoute";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <PrivetRoute>
            <Tasks />,
          </PrivetRoute>
        ),
      },
      {
        path: "/archive",
        element: <Archive />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);

export default routes;
