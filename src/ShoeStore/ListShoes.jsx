import React, { Fragment } from "react";
import Item from "./Item";

export default function ListShoes({
  shoes,
  handleRemoveFromList,
  handleAddToCart,
}) {
  let renderListShoes = () => {
    return shoes.map((shoe, index) => {
      return (
        <Item
          handleRemoveFromList={handleRemoveFromList}
          handleAddToCart={handleAddToCart}
          shoe={shoe}
          index={index}
        />
      );
    });
  };
  return <Fragment>{renderListShoes()}</Fragment>;
}
