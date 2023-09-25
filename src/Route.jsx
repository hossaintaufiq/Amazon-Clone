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
          element: <ProductDetails/>,
          loader:({params})=> fetch(`https://dummyjson.com/products/${params.id}`)

        },
        {
            path:  '/dashboard',
            element: <Dashboard/>,
            children:[{
              
            }]

        }
         
      
  
    ]
  }
  ]);

  export default myCreatedRoute;