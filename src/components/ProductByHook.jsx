import React from "react";
import { useSelector } from "react-redux";

const ProductByHook = () => {
  const product = useSelector((state) => state);
  return (
    <div>
      {product.map((item) => {
        return (
          <h3>
            {item.name} --- {item.price}
          </h3>
          
        );
      })}
      <button>Remove</button>
    </div>
  );
};

export default ProductByHook;
