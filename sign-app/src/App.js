import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import SingIn from './components/SingIn';
import SingUp from './components/SingUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/SingIn">
          <SingIn/>
        </Route>
        <Route path="/SingUp">
          <SingUp/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
