import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";


const Products = () => {

    const {products} = useLoaderData();
    // console.log(products);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5">
            {
                products.map(product=> <Product key={product.id} product={product}/>)
                
            }

            </div>
            
        </div>
    );
};

export default Products;