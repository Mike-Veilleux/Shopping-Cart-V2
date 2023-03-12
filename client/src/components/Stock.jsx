import React from "react";

const Stock = ({ stockItems, addToCart }) => {
  const renderStock = stockItems?.map((product, index) => {
    return (
      <div
        key={index}
        className="card my-2 mx-2 shadow"
        style={{ width: "12rem" }}
      >
        <img src={`${product.name}.png`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <div className="col"> {`Cost: ${product.cost}$`}</div>
          <div className="col" style={{ fontSize: ".7em" }}>
            {`Origin: ${product.country}`}
          </div>
          <div className="col fs-4"> {`Stock: ${product.instock}`}</div>

          <button
            disabled={product.instock > 0 ? false : true}
            className={
              product.instock > 0
                ? "btn btn-success mt-2"
                : "btn btn-danger mt-2"
            }
            onClick={() => {
              addToCart(index);
            }}
          >
            {product.instock > 0 ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      <h3
        className="border rounded mb-2 p-2 "
        style={{ background: "#1a2b61", color: "white" }}
      >
        STOCK
      </h3>
      <div className="d-flex justify-content-center">{renderStock}</div>
    </>
  );
};

export default Stock;
