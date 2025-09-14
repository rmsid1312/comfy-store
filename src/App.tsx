// import { Button } from "./components/ui/button";
// import { useAppSelector } from "./hooks";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from "./pages";
import { ErrorComponent } from "./components";
import { loader as landingLoader } from "./pages/Landing";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorComponent />,
        loader: landingLoader,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "cart",
        element: <Cart />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "checkout",
        element: <Checkout />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "orders",
        element: <Orders />,
        errorElement: <ErrorComponent />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
