import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { RemovePhone, buyPhone } from "../redux/MobileStoreAction";

const AddNewProductByHook = () => {
  const product = useRef("");
  const price = useRef(0);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(buyPhone(product.current.value, price.current.value));
    dispatch(RemovePhone(product.current.value, price.current.value));
  };
  return (
    <div>
      <h2>Form By Hook :</h2>
      <form action="" onSubmit={submitHandler}>
        <input type="text" placeholder="name" ref={product} />
        <input type="text" placeholder="price" ref={price} />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddNewProductByHook;
