import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import SearchResults from './pages/SearchResults';
import Profile from './pages/Profile';
import Checkout from './pages/Checkout';
import './styles/main.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/car/:id" component={CarDetails} />
        <Route path="/search" component={SearchResults} />
        <Route path="/profile" component={Profile} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </Router>
  );
}

export default App;


