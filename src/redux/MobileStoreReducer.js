const initialState = [
  { id: 1, name: "iphone11", price: 10000 },
  { id: 2, name: "iphone12", price: 15000 },
  { id: 3, name: "iphone13", price: 18000 },
];

const MobileStoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY-PHONE":
      return [
        ...state,
        { id: new Date(), name: action.name, price: action.price },
      ];
    case "REMOVE-PHONE":
      return state.filter((item) => {
        return item.id !== action.id;
      });
    default:
      return state;
  }
};

export default MobileStoreReducer;
