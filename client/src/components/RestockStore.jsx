import { useState } from "react";

const RestockStore = ({ url, setUrl, restockProducts, fetchError }) => {
  let errorMessage = null;
  if (fetchError !== "") {
  }

  return (
    <div className="d-flex-col justify-content-end " style={{ width: "100%" }}>
      <div className="d-flex input-group mb-2 mt-3" style={{ width: "50%" }}>
        <button
          disabled={false}
          className="btn btn-success"
          type="button"
          id="button-addon2"
          onClick={(e) => restockProducts()}
        >
          Restock
        </button>
        <input
          disabled={true}
          type="text"
          className="form-control"
          placeholder="Enter database URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
      </div>
      {fetchError !== "" ? (
        <div className="alert alert-danger" role="alert">
          {fetchError}
        </div>
      ) : null}
    </div>
  );
};

export default RestockStore;
