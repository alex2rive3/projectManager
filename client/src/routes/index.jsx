import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import NotFound from "../pages/NotFound";
import Proyectos from "../pages/proyectos/Proyectos";
import ProyectoAdd from "../pages/proyectos/ProyectoAdd";

export default createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Proyectos />,
            },
            {
                path: "proyectos/agregar",
                element: <ProyectoAdd />,
            },
        ],
    },
]);
