const initialState = [
  { name: "iphone12", price: 12000 },
  { name: "iphone13", price: 18000 },
];

const MobileStoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY-PHONE":
      return [...state, { name: action.name, price: action.price }];
    default:
      return state;
  }
};

export default MobileStoreReducer;
