import { createBrowserRouter, Navigate, Outlet, redirect } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Navbar from "./componetns/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

const Router = createBrowserRouter([
  {
    path:'/',
    element: <Navigate to="/home" />
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "products",
        element: <Shop />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default Router;
