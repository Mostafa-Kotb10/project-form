import { createBrowserRouter, RouterProvider } from "react-router"
import SignUp from "./pages/sign-up/SignUp"
import AppLayout from "./components/AppLayout";
import Home from "./pages/home/Home";

const router = createBrowserRouter([
  {
     element: <AppLayout />,
     children: [
      {
        path: '/',
        element: <Home />
      }
      ,
      {
        path: "/sign-up",
        element: <SignUp />
      }
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
