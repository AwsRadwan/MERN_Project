import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap4/css/bootstrap.min.css';
import './css/plugins.css';
import './css/main.css';
import './App.css';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Admin from './views/Admin';
import Cookies from 'js-cookie'
import { Router } from "@reach/router"
import Main from './views/Main';
import OneBook from './views/OneBook';
import AboutUs from './views/AboutUs';
import Spinner from 'react-bootstrap/Spinner'


function App() {

  const [allBooks, setAllBooks] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(
      () => {
          axios.get("http://localhost:8000/api/books")
          .then(res => {
              setAllBooks(res.data.Books);
              setLoaded(true);
          })
      }, []
  );

  return (
    <div className="App">
      {
        loaded ?
        <Router>
          <Admin data={allBooks} setData={setAllBooks} path="/admin/login" />
          <Main data={allBooks} setData={setAllBooks}  path="/"/>
          <OneBook data={allBooks} setData={setAllBooks} path="book/:id" />
          <AboutUs data={allBooks} setData={setAllBooks} path="/aboutus" />
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
