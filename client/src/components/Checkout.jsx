import React from "react";

const Checkout = ({ cartItems }) => {
  let total = 0;

  cartItems.forEach((item) => {
    total += item.cost * item.inCart;
  });

  const renderSubTotal = cartItems.map((item, index) => {
    let subTotal = item.cost * item.inCart;
    return (
      <div key={index} className="row">
        <div className="col text-start">{`${item.inCart} x ${item.name}`}</div>
        <div className="col text-end">{subTotal}$</div>
      </div>
    );
  });

  return (
    <>
      <h3
        className="border rounded mb-1 p-2 "
        style={{ background: "#1a2b61", color: "white" }}
      >
        CHECKOUT
      </h3>
      <div>{renderSubTotal}</div>
      <hr />
      <div className="row">
        <h3 className="col text-start">{`Total: `}</h3>
        <h3 className="col text-end">{total}$</h3>
      </div>
    </>
  );
};

export default Checkout;
