import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './components/dashboard';
import NoMatch from './pages/noMatch';
import Post from './pages/Postforum';


function App() {

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/post' element={<Post />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
