import './App.css';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Home from "./components/Home/Home/Home";
import Orders from './components/Admin/Orders/Orders';
import AdminAdd from './components/Admin/AdminAdd/AdminAdd';
import Review from './components/Admin/Review/Review';
import ServiceAdd from './components/Admin/ServiceAdd/ServiceAdd';
import ManageService from './components/Admin/ManageService/ManageService';
import Login from './components/Shared/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from "./components/Shared/PrivateRoute/PrivateRoute";
import OrderProcess from './components/Home/OrderProcess/OrderProcess';


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
         <Home></Home>
        </Route>
        <Route path="/home">
         <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/orders">
         <Orders></Orders>
        </PrivateRoute>
        <PrivateRoute path='/orderProcess/:id'>
          <OrderProcess></OrderProcess>
        </PrivateRoute>
        <PrivateRoute path="/review">
         <Review></Review>
        </PrivateRoute>
        <PrivateRoute path="/addService">
         <ServiceAdd></ServiceAdd>
        </PrivateRoute>
        <PrivateRoute path="/adminAdd">
         <AdminAdd></AdminAdd>
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute path="/manage">
          <ManageService></ManageService>
        </PrivateRoute>
      </Switch>
  </Router>
  </UserContext.Provider>
  );
}

export default App;
