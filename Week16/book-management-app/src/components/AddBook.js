import React, { useContext } from 'react';
import BookForm from "./BookForm";
import BooksContext from "../context/BooksContext";

const AddBook = ({ history }) => {
  const { books, setBooks } = useContext(BooksContext);

  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    history.push("/");
    //history will be passes automatically by React Router to every component mentioned in the <Route />
    //books and setBooks props are form AppRouter.js
    // all added books are being stored in array.
    // setbooks function is inside the handleOnSubmit method.
    // sebooks function is passed in an array and by adding a newly added book first and then spreaad the all the books already added in the the books array
    // the latest book will be displayed first
    //books is an array --> see books [] empty array initialization in AppRouter.js
    // after a user added a book, the user will be redirected to Books List page ( main page ) by using history.push method

    // console.log (book);
  };

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;
