import { createBrowserRouter } from "react-router-dom";
import MainFile from "./MainFile/MainFile";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";

const myCreatedRoute = createBrowserRouter([
    {
      path: '/',
    element: <MainFile/>,
    children: [
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
  
      },
      {
        path: '/products',
        element: <Products></Products>
        }
      
  
    ]
  }
  ]);

  export default myCreatedRoute;