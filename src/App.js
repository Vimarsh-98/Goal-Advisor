import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import { Navigation } from "./Components/Navigation";
import { Jumbo } from "./Components/Jumbotron";
import Login from "./Components/Login";
import signup from "./Components/signup"
import Main from "./Components/Main"
import Goal from "./Components/Goal"
import test from "./Components/test-signup";
import testLogin from "./Components/test-login";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Navigation/>
        <br/><br/>
        <Switch>
          <Route exact path="/" component={Jumbo} />
          <Route exact path="/login" component={testLogin} />
          <Route exact path="/signup" component={test} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/goal" component={Goal} />
        </Switch>

      </Router>
    </div>  
  );
}

export default App;
