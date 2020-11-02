import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Route, Route} from "react-router-dom"
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={HomePage} />
        <Route page="/" component={LoginPage} />
        <Route page="/signup" component={RegisterPage} />
      </Router>
    </div>
  );
}

export default App;
