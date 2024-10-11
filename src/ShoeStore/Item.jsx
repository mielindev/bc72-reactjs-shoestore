import React from "react";

export default function Item({
  handleRemoveFromList,
  handleAddToCart,
  shoe,
  index,
}) {
  return (
    <div key={index} className="col-5 shadow-lg mx-3 mb-4 p-3 rounded-md">
      <img className="shadow-md" src={shoe.image} alt="" />
      <p className="h-14 d-flex align-items-start text-xl font-medium py-3">
        {shoe.name}
      </p>
      <div className="handleButtons d-flex justify-content-between mt-3">
        <button
          onClick={() => {
            handleAddToCart(shoe);
          }}
          className="btn btn-success"
        >
          Add to Cart
        </button>
        <button
          onClick={() => {
            handleRemoveFromList(shoe.id);
          }}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
