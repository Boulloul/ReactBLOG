import React from 'react';
import './App.css';
import Articles from "./components/Articles/Articles"
import DetailArticle from "./components/Articles/DetailArticle"
import About from "./components/About/About"
import Home from "./components/Home/Home"
import Add from "./components/add/Add"

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
    <nav class="navbar navbar-expand-lg navbar-light bg-warning">
    
<Link to={'/home'} ><a class="navbar-brand" href="">Blog-07</a></Link>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav">
            <li><Link to={'/home'} className="nav-link"> Home </Link></li>
            <li><Link to={'/article'} className="nav-link">Articles</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
            <li><Link to={'/add'} className="nav-link">Add Article</Link></li>

</ul>
</div>
</nav>
<Switch>
              <Route exact path='/' component={Home} exact/>
              <Route path='/article' component={Articles} exact/>
              <Route path='/about' component={About} exact/>
              <Route path='/home' component={Home} exact/>
              <Route path="/article/:name" component={DetailArticle} exact/>
              <Route path="/add" component={Add} exact/>
</Switch>
</div>
</Router>
  );
}

export default App;

