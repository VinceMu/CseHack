import React from 'react';
import './App.css';
import SearchBar from '../Search'
import ResultsPage from "../Results/ResultsPage"
import { BrowserRouter as Router ,Route,Switch,withRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>iMu</h1>
      <header className="App-header">
        <Router>
        <Switch>

          <Route exact path="/" component={SearchBar}>
          </Route>
          <Route path="/result" component={ResultsPage}>
          </Route>
          </Switch>

        </Router>
      </header>
    </div>
  );
}

export default App;
