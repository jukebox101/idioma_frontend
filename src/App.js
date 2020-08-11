import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import LessonsContainer from './components/LessonsContainer';
import UserAccount from './components/UserAccount';

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  console.log("currentUser: ", currentUser)


  const handleLogin = (newUser) => {
    setCurrentUser(newUser)
    
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    setCurrentUser(null)
    console.log("logged out clicked")
  }


  useEffect(() => {
    if(localStorage.token) {
      fetch(`http://localhost:3000/autologin`, {
        headers: {
          "Authorization": `Bearer ${localStorage.token}`
        }
      })
        .then(r => r.json())
        .then(data => {

          if (!data.error) {
            handleLogin(data)
          }
          
          })
    }

  }, [])


  return (
    <>
      <NavBar currentUser={currentUser} handleLogout={handleLogout} />
      <main>
        <Router>
          <Switch>

            <Route path='/signup'>
              <SignUp handleLogin={handleLogin} />
            </Route>
            <Route path='/login'>
              <Login handleLogin={handleLogin}  />
            </Route>
            <Route path='/profile'>
            {currentUser !== null ? <UserAccount currentUser={currentUser} /> : <h1>Not signed in</h1>}
            </Route>
            
            <Route path='/lessons' component={LessonsContainer}/>
                <Route path="/">
                <h1>Please Login or Sign Up</h1>
                </Route>
          </Switch>

        </Router>
        
      </main>
      
    </>
  );
}

export default App;
