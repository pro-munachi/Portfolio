import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Error from './components/Error'
import Navigation from './components/Navigation'

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navigation />
    <Switch>
    <Route path='/' component={Home} exact/>
    <Route path='/about' component={About} />
    <Route path='/experience' component={Experience} />
    <Route path='/contact' component={Contact} />
    <Route component={Error} />
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
