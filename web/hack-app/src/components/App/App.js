import React from 'react';
import './App.css';
import SearchBar from '../Search'
import ResultsPage from "../Results/ResultsPage"
import { BrowserRouter as Router ,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <h1>iMu</h1>
      <header className="App-header">
        <Router>
          <Route exact path="/" component={SearchBar}>
          </Route>
          <Route path="/result" component={ResultsPage}>
          </Route>
        </Router>
      </header>
    </div>
  );
}

export default App;
