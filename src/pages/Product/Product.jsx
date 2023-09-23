
import PropTypes from 'prop-types';


const Product = ({product}) => {
    console.log(product);
    return (
        <div>
            <img src={product.thumbnail} alt="" />
            <h1>Name: {product.title}</h1>
            description: {product.description}
            
        </div>
    );
};

Product.proptypes= {
    product: Proptypes.object 
}

export default Product;