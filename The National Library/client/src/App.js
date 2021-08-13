import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap4/css/bootstrap.min.css';
import './css/plugins.css';
import './css/main.css';
import './App.css';


import Admin from './views/Admin';
import Cookies from 'js-cookie'
import { Router } from "@reach/router"
import Main from './views/Main';
import OneBook from './views/OneBook';
import AboutUs from './views/AboutUs';


function App() {


  return (
    <div className="App">





      <Router>
        <Admin path="/admin/login" />
        <Main path="/" />
        <OneBook path="book/:title" />
        <AboutUs path="/aboutus" />
      </Router>
    </div>
  );
}

export default App;
