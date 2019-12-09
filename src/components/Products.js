import React,{useContext} from 'react';
import ProductContext from "../Contexts/ProductContext";

// Components
import Product from './Product';

const Products = ({products, addItem}) => {
	const produce = useContext(ProductContext)
	return (
		<div className="products-container">
			{produce.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={produce.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
