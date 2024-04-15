import React, { useRef } from "react";
import Store from "../redux/Store";
import { buyPhone } from "../redux/MobileStoreAction";

const AddNewProduct = () => {
  const product = useRef("");
  const price = useRef(0);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(product.current.value);
    console.log(price.current.value);
    Store.dispatch(buyPhone(product.current.value, price.current.value));
  };
  return (
    <div>
      <h2>Form By MapStateToProps :</h2>
      <form action="#" onSubmit={submitHandler}>
        <input type="text" placeholder="product" ref={product} />
        <input type="text" placeholder="price" ref={price} />
        <button>Add New Product</button>
<<<<<<< HEAD
        
=======
        <button>Remove</button>
>>>>>>> 2298c212c3da7096d20c728765a811191ef5a260
      </form>
    </div>
  );
};

export default AddNewProduct;
