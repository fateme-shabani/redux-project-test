import { type } from "@testing-library/user-event/dist/type";

export const buyPhone = (name, price, id) => {
  return {
    type: "BUY-PHONE",
    name: name,
    price: price,
    id: id,
  };
};
export const shoping = (name, price, count) => {
  return {
    type: "add_to_cart",
    name: name,
    price: price,
    count: count,
  };
};

export const RemovePhone = (id) => {
  return {
    type: "REMOVE-PHONE",
    id: id,
  };
};
