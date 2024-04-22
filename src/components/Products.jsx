import React from "react";
import { connect } from "react-redux";

const Products = (props) => {
  return (
    <div>
      {props.prd.map((item) => {
        return (
          <div>
            <h2>
              {item.name} ---- {item.price}
            </h2>
          </div>
        );
      })}
      <button>Remove</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    prd: state.product,
  };
};

// export default Products

export default connect(mapStateToProps)(Products);
