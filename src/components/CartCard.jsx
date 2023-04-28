import React from 'react';
import { useDispatch } from 'react-redux';
import { addCartQuantity, deletefromcart, removeCartQuantity } from '../redux/cart/action';

const CartCard = (props) => {
   const dispatch = useDispatch()
   const {imgUrl,productName,cagetories,price,cartQuantity,quantity} = props.product;

   const handleIncrease = () => {
    dispatch(addCartQuantity(props.product))
   }
   const handleDecrement = () => {
    dispatch(removeCartQuantity(props.product))
   }
    const handledelete = () => {
      dispatch(deletefromcart(props.product))
    }
    return (
        <>
            <div className="cartCard">
            <div className="flex items-center col-span-6 space-x-6">
              {/* <!-- cart image --> */}
              <img className="lws-cartImage" src={imgUrl} alt="product" />
              {/* <!-- cart item info --> */}
              <div className="space-y-2">
                <h4 className="lws-cartName">{productName}</h4>
                <p className="lws-cartCategory">{cagetories}</p>
                <p>BDT <span className="lws-cartPrice">{price}</span></p>
              </div>
            </div>
            <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
              {/* <!-- amount buttons --> */}
              <div className="flex items-center space-x-4">
                <button className="lws-incrementQuantity" disabled={quantity  <= 0 && true} onClick={handleIncrease }>
                  <i className="text-lg fa-solid fa-plus"></i>
                </button>
                <span className="lws-cartQuantity">{cartQuantity }</span>
                <button className="lws-decrementQuantity" disabled={cartQuantity  <= 1 && true} onClick={handleDecrement}>
                  <i className="text-lg fa-solid fa-minus"></i>
                </button>
              </div>
              {/* <!-- price --> */}
              <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">{cartQuantity * price}</span></p>
            </div>
            {/* <!-- delete button --> */}
            <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
              <button className="lws-removeFromCart" onClick={handledelete}>
                <i className="text-lg text-red-400 fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </>
    );
};

export default CartCard;