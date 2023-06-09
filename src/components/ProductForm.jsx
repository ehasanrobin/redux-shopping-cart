import React from 'react';
import { useDispatch } from 'react-redux';
import { addedProducts } from '../redux/products/actions';

const ProductForm = () => {
  const dispatch = useDispatch()
    const addProduct = (e)=> {
        e.preventDefault()
        const productName = e.target.lwsInputName.value
        const categories = e.target.inputCategory.value
        const imgUrl = e.target.inputImage.value
        const price = e.target.inputPrice.value
        const quantity = Number(e.target.inputQuantity.value)
      
    dispatch(addedProducts({productName,categories,quantity,price,imgUrl}))
    e.target.reset()
    }
    return (
        <>
           <div className="formContainer">
            <h4 className="formTitle">Add New Product</h4>
            <form className="space-y-4 text-[#534F4F]" onSubmit={addProduct} id="lws-addProductForm">
              {/* <!-- product name --> */}
              <div className="space-y-2">
                <label for="lws-inputName">Product Name</label>
                <input
                  className="addProductInput"
                  id="lws-inputName"
                  name="lwsInputName"
                  type="text"
                  required
                />
              </div>
              {/* <!-- product category --> */}
              <div className="space-y-2">
                <label for="lws-inputCategory">Category</label>
                <input
                  className="addProductInput"
                  id="lws-inputCategory"
                  name="inputCategory"
                  type="text"
                  required
                />
              </div>
              <div className="space-y-2">
                <label for="lws-inputImage">Image Url</label>
                <input
                  className="addProductInput"
                  id="lws-inputImage"
                  name="inputImage"
                  type="text"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-8 pb-4">
                {/* <!-- price --> */}
                <div className="space-y-2">
                  <label for="ws-inputPrice">Price</label>
                  <input
                    className="addProductInput"
                    type="number"
                    id="lws-inputPrice"
                    name="inputPrice"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label for="lws-inputQuantity">Quantity</label>
                  <input
                    className="addProductInput"
                    type="number"
                    id="lws-inputQuantity"
                    name="inputQuantity"
                    required
                  />
                </div>
              </div>
              <button type="submit" id="lws-inputSubmit" className="submit">
                Add Product
              </button>
            </form>
          </div> 
        </>
    );
};

export default ProductForm;