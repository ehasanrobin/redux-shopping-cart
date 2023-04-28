import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart/action';

const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    const {productName,price,quantity,cagetories,imgUrl} = product;


 const handleCart = () => {
      dispatch(addToCart(product))
    }

    

    return (
        <>
            <div className="lws-productCard">
            <img
              className="lws-productImage"
              src={imgUrl}
              alt="product"
            />
            <div className="p-4 space-y-2">
              <h4 className="lws-productName">{productName}</h4>
              <p className="lws-productCategory">{cagetories}</p>
              <div className="flex items-center justify-between pb-2">
                <p className="productPrice">
                  BDT <span className="lws-price">{price}</span>
                </p>
                <p className="productQuantity">
                  QTY <span className="lws-quantity">{quantity}</span>
                </p>
              </div>
              <button className="lws-btnAddToCart" onClick={handleCart}>Add To Cart</button>
            </div>
          </div>
        </>
    );
};

export default ProductCard;