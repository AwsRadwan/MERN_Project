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





      <Router>
        <Admin path="/admin/login" />
        <Main path="/" />
        <ThisBook path="book/:title" />
      </Router>
    </div>
  );
}

export default App;
