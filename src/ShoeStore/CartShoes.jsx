import { Button, message, Popconfirm } from "antd";
import React from "react";

export default function CartShoes({
  cart,
  handleRemoveFromCart,
  handleChangeTotal,
}) {
  let renderCart = () => {
    return cart.map((item, index) => {
      return (
        <tr key={index} className="text-lg text-center">
          <td>{item.name}</td>
          <td width={100}>
            <img src={item.image} alt="" />
          </td>
          <td>{item.price}</td>
          <td>
            {item.total <= 1 ? (
              <Popconfirm
                title="Delete this shoes?"
                description="Are you sure to delete this shoes?"
                onConfirm={(e) => {
                  console.log(e);
                  handleRemoveFromCart(item);
                  message.success("Deleted item");
                }}
                showCancel={false}
                okText="Yes"
                cancelText="No"
              >
                <Button className="px-3 py-1 rounded-xl" type="primary">
                  <i className="fa fa-minus" />
                </Button>
              </Popconfirm>
            ) : (
              <button
                onClick={() => {
                  handleChangeTotal(item, -1);
                }}
                className="btn btn-primary px-3 py-1 rounded-xl"
              >
                <i className="fa fa-minus" />
              </button>
            )}
            <strong className="mx-3">{item.total}</strong>
            <button
              onClick={() => {
                handleChangeTotal(item, 1);
              }}
              className="btn btn-primary px-3 py-1 rounded-xl"
            >
              <i className="fa fa-plus" />
            </button>
          </td>
          <td>
            <Popconfirm
              title="Delete this shoes?"
              description="Are you sure to delete this shoes?"
              onConfirm={() => {
                handleRemoveFromCart(item);
                message.success("Deleted item");
              }}
              showCancel={false}
              okText="Yes"
            >
              <Button className="p-3" color="danger" variant="solid">
                Delete
              </Button>
            </Popconfirm>
          </td>
        </tr>
      );
    });
  };
  return (
    <div>
      <table width={"100%"}>
        <thead className="text-center text-xl">
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderCart()}</tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}
