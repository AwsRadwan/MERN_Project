import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
// import Admin from './views/Admin';
import CommentForm from './components/CommentForm';
=======
import Admin from './views/Admin';
import Cookies from 'js-cookie'
import { Router, Link } from "@reach/router"
import Main from './views/Main';

>>>>>>> d70b7ee9ad769c69a8741bbd1c038264c8b1cc4b
function App() {


  return (
    <div className="App">
<<<<<<< HEAD
      <Admin />
      
=======
      <Router>
        <Admin path="/admin/login" />
        <Main  path="/"/>
      </Router>
>>>>>>> d70b7ee9ad769c69a8741bbd1c038264c8b1cc4b
    </div>
  );
}

export default App;
