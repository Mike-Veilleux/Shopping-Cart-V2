import React from "react";

const Cart = ({ cartItems, removeOneItem }) => {
  const renderCart = cartItems.map((product, index) => {
    return (
      <div
        key={index}
        className="row border rounded my-2 mx-2 shadow"
        style={{ width: "12rem", height: "6rem" }}
      >
        {/* <div className="col"> {product.name}</div> */}
        <div className="col"> {`${product.name}: ${product.cost}$ / pcs`}</div>
        <div className="d-flex col fs-4 justify-content-center align-items-center">
          {" "}
          {`x ${product.inCart}`}
        </div>
        <button
          disabled={product.inCart <= 0 ? true : false}
          className="btn btn-warning"
          onClick={() => {
            removeOneItem(index);
          }}
        >
          Remove One Item
        </button>
      </div>
    );
  });

  return (
    <>
      <h3
        className="border rounded mb-2 p-2 "
        style={{ background: "#1a2b61", color: "white" }}
      >
        MyCART
      </h3>
      <div className="d-flex justify-content-center">{renderCart}</div>
    </>
  );
};

export default Cart;
