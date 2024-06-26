import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Login from "../Pages/Home/Login";

const routers = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/career',
                element: <Career />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
]);

export default routers;