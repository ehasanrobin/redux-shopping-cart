import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import ProductForm from '../components/ProductForm';

const Home = () => {
    const products = useSelector((state) => state.products);

    return (
        <div>
            <main className="py-16">
      <div className="productWrapper">
        {/* <!-- products container --> */}
        <div className="productContainer" id="lws-productContainer">
          {/* <!-- product item --> */}
          {
            
          products?.length > 0 ? products.map(product => <ProductCard product={product}></ProductCard>)
          : "No products but you can add"

          
          }
          {/* <!-- product item ends --> */}
        </div>
        {/* <!-- products container ends --> */}
        <div>
          {/* <!-- Product Input Form --> */}
          <ProductForm></ProductForm>
         
        </div>
      </div>
    </main>
        </div>
    );
};

export default Home;