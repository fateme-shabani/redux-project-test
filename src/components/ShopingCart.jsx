import React from "react";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const productsFromShoppingCard = useSelector(state => state.shoppingCart);
  return (
    <div>
      {productsFromShoppingCard.map((item) => {
        return <h3> {item.name}---{item.price}---{item.count} </h3>
      })}
    </div>
  );
};

export default ShoppingCart;
