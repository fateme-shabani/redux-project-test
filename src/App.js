import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products";
import AddNewProduct from "./components/AddNewProduct";
import ProductByHook from "./components/ProductByHook";
import AddNewProductByHook from "./components/AddNewProductByHook";
import ShopingCart from "./components/ShopingCart";

function App() {
  return (
    <>
      <AddNewProduct />
      <Products />
      <AddNewProductByHook />
      <ProductByHook />
      ----------------------------shopping cart------------------------------------
      <ShopingCart />
    </>
  );
}

export default App;
