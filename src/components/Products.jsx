import React from "react";
import { connect } from "react-redux";

const Products = (props) => {
  return (
    <div>
      {props.products.map((item) => {
        return (
          <div>
            <h2>{item.name}----{item.price}</h2>
          
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state,
  };
};

// export default Products

export default connect(mapStateToProps)(Products);
