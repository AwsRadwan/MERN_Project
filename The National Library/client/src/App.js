import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap4/css/bootstrap.min.css';
import './css/plugins.css';
import './css/main.css';
import './App.css';
import './index.css';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Admin from './views/Admin';
import Cookies from 'js-cookie'
import { Router } from "@reach/router"
import Main from './views/Main';
import OneBook from './views/OneBook';
import AboutUs from './views/AboutUs';
import Spinner from 'react-bootstrap/Spinner'
import ReserveOrders from './views/ReserveOrders';


function App() {

  const [allBooks, setAllBooks] = useState([]);
  const [loadedB, setLoadedB] = useState(false);
  const [allReserves, setAllReserves] = useState([]);
  const [loadedR, setLoadedR] = useState(false);

  useEffect(
      () => {
          axios.get("http://localhost:8000/api/reserves")
          .then(res => {
              setAllReserves(res.data.Books);
              setLoadedR(true);
          })
          .catch(err => {
              console.log(err);
          })
      }, []
  );

  useEffect(
      () => {
          axios.get("http://localhost:8000/api/books")
          .then(res => {
              setAllBooks(res.data.Books);
              setLoadedB(true);
          })
      }, []
  );

  return (
    <div className="App">
      {
        (loadedB && loadedR) ?
        <Router>
          <Admin reserves={allReserves} setReserves={setAllReserves} data={allBooks} setData={setAllBooks} path="/admin/*" />
          <Main data={allBooks} setData={setAllBooks}  path="/"/>
          <OneBook data={allBooks} setData={setAllBooks} path="/book/:id" />
          <AboutUs data={allBooks} setData={setAllBooks} path="/aboutus" />
          <ReserveOrders path="/reserve/:id" />
        </Router>
      :
      <Spinner animation="border" role="status" variant="success">
          <span className="visually-hidden">Loading...</span>
      </Spinner>
      }
    </div>
  );
}

export default App;
