export const buyPhone = (name, price, id) => {
  return {
    type: "BUY-PHONE",
    name: name,
    price: price,
    id: id,

  };
};

export const RemovePhone = (id) => {
  return {
    type: "REMOVE-PHONE",
    id: id,
  };
};
