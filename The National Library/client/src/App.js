import './App.css';
import Admin from './views/Admin';
import Cookies from 'js-cookie'
import { Router } from "@reach/router"
import Main from './views/Main';



function App() {


  return (
    <div className="App">

      <Router>
        <Admin path="/admin/*" />
        <Main path="/" />
      </Router>
    </div>
  );
}

export default App;
