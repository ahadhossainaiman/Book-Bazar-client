import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddBook from "./component/AddBook/AddBook";
import Admin from "./component/Admin/Admin";
import CheckOut from "./component/CheckOut/CheckOut";
import EditBook from "./component/EditBook/EditBook";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import ManageBook from "./component/ManageBook/ManageBook";
import Order from "./component/Order/Order";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header />
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/order">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/checkOut/:id">
              <CheckOut></CheckOut>
            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/manageBook">
              <ManageBook></ManageBook>
            </Route>
            <Route path="/addBook">
              <AddBook></AddBook>
            </Route>
            <Route path="/editBook">
              <EditBook></EditBook>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
