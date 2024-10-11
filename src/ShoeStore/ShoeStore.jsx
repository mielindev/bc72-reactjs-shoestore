import React, { useState } from "react";
import ListShoes from "./ListShoes";
import CartShoes from "./CartShoes";
import { ShoeArr } from "./datajson";

export default function ShoeStore() {
  const [shoes, setShoes] = useState(ShoeArr);
  const [cart, setCart] = useState([]);
  let handleRemoveFromList = (idShoe) => {
    let newArr = shoes.filter((item) => {
      return item.id !== idShoe;
    });
    setShoes(newArr);
  };
  let handleAddToCart = (shoe) => {
    let shoeItem = { ...shoe, total: 1 };
    let cloneCart = [...cart];
    let index = cloneCart.findIndex((item) => {
      return item.id === shoeItem.id;
    });
    if (index === -1) {
      cloneCart.push(shoeItem);
    } else {
      cloneCart[index].total += 1;
    }
    setCart(cloneCart);
  };
  let handleRemoveFromCart = (shoe) => {
    let cloneCart = [...cart];
    let index = cloneCart.findIndex((item) => {
      return item.id === shoe.id;
    });
    cloneCart.splice(index, 1);
    setCart(cloneCart);
  };
  let handleChangeTotal = (shoe, unit) => {
    let cloneCart = [...cart];
    let index = cloneCart.findIndex((item) => {
      return item.id === shoe.id;
    });
    cloneCart[index].total += unit;
    setCart(cloneCart);
  };
  return (
    <div className="row container my-6">
      <div className="row col-5">
        <ListShoes
          shoes={shoes}
          handleRemoveFromList={handleRemoveFromList}
          handleAddToCart={handleAddToCart}
        />
      </div>
      <div className="col-7">
        <CartShoes
          cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleChangeTotal={handleChangeTotal}
        />
      </div>
    </div>
  );
}
