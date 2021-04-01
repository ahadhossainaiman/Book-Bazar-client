import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";

const Order = () => {
  const [order, setOrder] = useState({});
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:5000/checkOutOrder?=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  return (
    <div>
      <h1>My Order</h1>
      <table class="table-info table-striped table-bordered border-dark table-responsive">
        <tr>
          <th colspan="5">Order Details</th>
          <th>User Details</th>
        </tr>
        <tr>
          <td>
            <p>
              <b>Book Name</b>
            </p>
            {order.bookName}
          </td>
          <td>
            <p>
              <b>Author Name</b>
            </p>
            {order.authorName}
          </td>
          <td>
            <p>
              <b>Price</b>
            </p>
            {order.price}
          </td>
          <td>
            <p>
              <b>Order Date</b>
            </p>
            {new Date(order.checkOut).toDateString("dd/MM/yyyy")}
          </td>
          <td>
            <img src={order.imageUrl} style={{ width: "20%" }} alt="" />
          </td>

          <td>
            <p>Name: {order.name}</p>
            <img style={{ width: "30%" }} src={order.photo} alt="" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Order;
