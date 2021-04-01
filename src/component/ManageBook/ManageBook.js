import { useEffect, useState } from "react";

const ManageBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handleDelete = (id) => {
    // console.log(id);
    fetch(`http://localhost:5000/deletebook/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      {books.map((book) => (
        <table class="table-info table-striped table-bordered border-dark table-responsive">
          <tr>
            <img src={book.imageUrl} style={{ width: "10%" }} alt="" />
            <th className="p-3">{book.bookName}</th>
            <tr>
              <button
                onClick={() => handleDelete(books[0]._id)}
                className="btn btn-danger ml-5"
              >
                Delete
              </button>
            </tr>
          </tr>
        </table>
      ))}
    </div>
  );
};

export default ManageBook;
