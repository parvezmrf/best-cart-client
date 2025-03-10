import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            index:true,
            element: <Home/>
        },
        {
            path:"about",
            element: <About/>
        },
        {
            path:"login",
            element: <Login/>
        },
        {
            path:"register",
            element: <Register/>
        },
      ]
    },
  ]);

export default router;