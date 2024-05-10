import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/auth/login";
import RegisterPage from "../pages/auth/register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth/",
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);
