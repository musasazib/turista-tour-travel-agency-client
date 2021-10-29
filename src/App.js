import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
          <Header></Header>
          <Switch>
          <Route>
            <Home></Home>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
