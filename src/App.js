import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
// import { BrowserRouter as Router, Router } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import App2 from './App2';

function App() {
  return (
    <>
    {/* <Router> */}
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={App2} />
        </Switch>
      </BrowserRouter>
      {/* </Router> */}
    </>
  );
}

export default App;
