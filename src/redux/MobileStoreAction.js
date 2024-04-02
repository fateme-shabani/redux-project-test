export const buyPhone = (name, price) => {
  return {
    type: "BUY-PHONE",
    name: name,
    price: price,
  };
};
