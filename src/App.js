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
          <Route exact path='/ibanez-farm-equipment' component={Home} />
          <Route exact path='/ibanez-farm-equipment/johndeere' component={Products} />
          <Route exact path='/ibanez-farm-equipment/CAT' component={Products} />
        </Switch>
        <Footer />
      </Router> 
    </div>
  );
}

export default App;
