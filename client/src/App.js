import React from 'react';
import './App.css';
import NavBar from './components/navbar.js'
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/screens/home';
import Profile from './components/screens/profile';
import Signin from './components/screens/signin';
import Signup from './components/screens/signup';
import CreatePost from './components/screens/createpost';
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/signin'>
        <Signin/>
      </Route>
      <Route path='/signup'>
        <Signup/>
      </Route>
      <Route path='/profile'>
        <Profile/>
      </Route>
      <Route path='/create'>
        <CreatePost/>
      </Route>
    </BrowserRouter>
    
  );
}

export default App;
