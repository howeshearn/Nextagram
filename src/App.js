import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import UserProfilePage from './pages/UserProfilePage';
import Axios from 'axios';

function App() {

  const [currentUser, setCurrentUser] = useState({})

  function updateUser(newUser) {
    setCurrentUser(newUser);
  }

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwt');

    Axios.get('https://insta.nextacademy.com/api/v1/users/me', {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    })
      .then(response => {
        console.log(response.data)
        setCurrentUser(response.data)
      })
      .catch(error => {
        console.log(error.response)
      })
  }, []);

  return (
    <div>
      <Navbar currentUser={currentUser} updateUser={updateUser} />
      <Switch>
        <Route exact path='/'>
          <HomePage currentUser={currentUser} />
        </Route>
        <Route path='/users/:id'>
          <UserProfilePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
