import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import AddBook from "../components/AddBook";
import BooksList from "../components/BooksList";
import useLocalStorage from "../hooks/useLocalStorage";
import EditBook from "../components/EditBook";
import BooksContext from '../context/BooksContext';


//setup routings for components

const AppRouter = () => {
  //useLocalStorage will be used inside AppRouter so we can add or remove data from local storage
  const [books, setBooks] = useLocalStorage("books", []);
  //books is initialized as an empty array


//   return (
//     <BrowserRouter>
//       <div>
//         <Header />
//         <div className="main-contenr">
//           <Switch>
//             {/* <Route component={BooksList} path="/" exact={true} /> */}
//             <Route
//               render={(props) => (
//                 <BooksList {...props} books={books} setBooks={setBooks} />
//               )}
//               path="/"
//               exact={true} // this route allows us to see added books on the user interface
//             />
//             {/* <Route component={AddBook} Path="/add" /> */}
//             <Route
//               render={(props) => (
//                 <AddBook {...props} books={books} setBooks={setBooks} />
//               )}
//               path="/add"
//             />
//             <Route
//               render={(props) => (
//                 <EditBook {...props} books={books} setBooks={setBooks} />
//               )}
//               path="/edit/:id"
//               //path="/edit/:id is the path to edit a book and :id is any random id
//             />
//             <Route component={() => <path to="/" />} />
//           </Switch>
//         </div>
//       </div>
//     </BrowserRouter>
//   );


return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <BooksContext.Provider value={{ books, setBooks }}>
            <Switch>
              <Route component={BooksList} path="/" exact={true} />
              <Route component={AddBook} path="/add" />
              <Route component={EditBook} path="/edit/:id" />
              <Route component={() => <path to="/" />} />
            </Switch>
          </BooksContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );

};

export default AppRouter;
