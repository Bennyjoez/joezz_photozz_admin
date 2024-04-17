import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/error/Error.tsx";
import Profile from "./pages/Profile.tsx";
import Bookings from "./pages/Bookings.tsx";
import Messages from "./pages/Messages.tsx";
import Dashboard from "./pages/Dashboard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/bookings",
        element: <Bookings />
      },
      {
        path: "/messages",
        element: <Messages />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
