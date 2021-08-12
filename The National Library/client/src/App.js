import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap4/css/bootstrap.min.css';
import './css/plugins.css';
import './css/main.css';
import './App.css';


import CommentForm from './components/CommentForm';

import Admin from './views/Admin';
import Cookies from 'js-cookie'
import { Router } from "@reach/router"
import Main from './views/Main';
import ThisBook from './components/ThisBook';


function App() {


  return (
    <div className="App">



      <Admin />

      <Router>
<<<<<<< HEAD
        <Admin path="/admin/login" />
        <Main  path="/"/>
        <ThisBook path="book/:title" />
=======
        <Admin path="/admin/*" />
        <Main path="/" />
>>>>>>> bcce5b2499544897c231c99bc1cf0f2ce0ef96df
      </Router>
    </div>
  );
}

export default App;
