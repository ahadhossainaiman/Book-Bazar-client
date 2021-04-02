import { useEffect, useState } from "react";

const ManageBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://nameless-plateau-23547.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handleDelete = (id) => {
    // console.log(id);
    fetch(`https://nameless-plateau-23547.herokuapp.com/deletebook/${id}`, {
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
