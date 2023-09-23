import { createBrowserRouter } from "react-router-dom";
import MainFile from "./MainFile/MainFile";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProductDetails from "./pages/ProductDetails/ProductDetails";


const myCreatedRoute = createBrowserRouter([
    {
      path: '/',
    element: <MainFile/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
  
      },
      {
        path: '/products',
        element: <Products></Products>,
        loader: ()=> fetch(`https://dummyjson.com/products`)
        },
        {
          path: '/products/:id',
          element: <ProductDetails/>

        },
        {
            path:  '/dashboard',
            element: <Dashboard/>

        }
         
      
  
    ]
  }
  ]);

  export default myCreatedRoute;