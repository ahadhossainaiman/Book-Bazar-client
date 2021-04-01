import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";
import { useParams } from "react-router";

const CheckOut = () => {
  const { id } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [book, setBook] = useState({});
  const [date, setDate] = useState({ checkOut: new Date() });

  const handleCheckOut = () => {
    const newCheckOut = { ...loggedInUser, ...date, ...book };
    fetch("http://localhost:5000/addCheckOut", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCheckOut),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const checkOut = new Date();
  //  setDate(checkOut);
  // setDate(new Date())

  console.log(date);
  useEffect(() => {
    fetch("http://localhost:5000/book/" + id)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);

  return (
    <div>
      <h1 className="mt-5">Check Out</h1>
      <table className="table table-striped table-bordered border-primary">
        <tr>
          <th>Description</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>{book.bookName}</td>
          <td>1</td>
          <td>{book.price}</td>
        </tr>
      </table>
      <button onClick={handleCheckOut}>CheckOut</button>
    </div>
  );
};

export default CheckOut;
