import App from "./App";
import Home from "./pages/Home";
import CreateGoal from "./pages/CreateGoal";
import Goal from "./pages/Goal";
import ErrorPage from "./pages/ErrorPage";
import Edit from "./pages/Edit";
import AddAmount from "./components/AddAmount";




const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: "createGoal", 
        element: <CreateGoal />,
      },
      {
        path: "editGoal/:id", 
        element: <Edit />,
      },
      {
        path: "goal/:id", 
        element: <Goal />,
      },
      {
        path: "addAmount/:id", 
        element: <AddAmount />,
      },
    ],
  },
];
export default routes;
