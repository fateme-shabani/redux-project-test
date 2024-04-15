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
<<<<<<< HEAD
          
        );
      })}
      <button>Remove</button>
=======
        );
      })}
>>>>>>> 2298c212c3da7096d20c728765a811191ef5a260
    </div>
  );
};

export default ProductByHook;
