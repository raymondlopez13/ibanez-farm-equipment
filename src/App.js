import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from './pages/products'

function App() {
  return (
    <div className='App'>
      <Router>
        <header>
          <Nav />
        </header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/johndeere' component={Products} />
          <Route exact path='/CAT' component={Products} />
        </Switch>
        <Footer />
      </Router> 
    </div>
  );
}

export default App;
