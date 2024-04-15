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
    dispatch(RemovePhone)
  };
  return (
    <div>
        <h2>Form By Hook :</h2>
      <form action="" onSubmit={submitHandler}>
        <input type="text" placeholder="name" ref={product} />
        <input type="text" placeholder="price" ref={price} />
        <button>Add</button>
<<<<<<< HEAD
        
=======
        <button>Remove</button>
>>>>>>> 2298c212c3da7096d20c728765a811191ef5a260
      </form>
    </div>
  );
};

export default AddNewProductByHook;
