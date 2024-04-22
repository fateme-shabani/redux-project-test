const INITIAL_STATE = [
  { name: "iphone11", price: 1200, count: 1 },
  { name: "iphone12", price: 1300, count: 2 },
];
const ShoppingCartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "add_to_cart":
      return( [
        ...state,
        {
          name: action.name,
          price: action.price,
          count: action.count,
        },
      ]);
    default:
      return state;
  }
};
export default ShoppingCartReducer;
