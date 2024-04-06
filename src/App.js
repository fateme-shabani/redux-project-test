import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products";
import AddNewProduct from "./components/AddNewProduct";

function App() {
  return (
    <>
      <AddNewProduct />
      <Products />
    </>
  );
}

export default App;
