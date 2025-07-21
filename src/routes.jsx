import App from "./App";
import Home from "./pages/Home";
import EditCreate from "./pages/EditCreate";
import Goal from "./pages/Goal";
import ErrorPage from "./pages/ErrorPage";




const routes = [
  {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
           {
              path: "/",
              element: <Home />,

          }, 
          {
              path: "/editCreate",
              element: <EditCreate />
          },
          {
              path: "/goal/:id",
              element: <Goal />
          }
      ]
  }
];

export default routes;
