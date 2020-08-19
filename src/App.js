import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import LessonsContainer from './components/LessonsContainer';
import UserAccount from './components/UserAccount';
import Lesson from './components/Lesson';
import Exercises from './components/Exercises';

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [completedExercises, setCompletedExercises] = useState([]);
  const [lessons, setLessons] = useState([])

  const handleLogin = (newUser) => {
    setCurrentUser(newUser)
    
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    setCurrentUser(null)
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

  useEffect(() => {
    fetch('http://localhost:3000/exercises', {
        headers: {
        "Authorization": `Bearer ${localStorage.token}`
        }
    })
    .then(r => r.json())
    .then(exercisesArr => {
        setExercises(exercisesArr)
    })
  }, [])

useEffect(() => {
  fetch('http://localhost:3000/completed_exercises', {
      headers: {
      "Authorization": `Bearer ${localStorage.token}`
      }
  })
  .then(r => r.json())
  .then(data => {
      setCompletedExercises(data)
  })                    
}, [])

useEffect(() => {
  fetch('http://localhost:3000/lessons', {
      headers: {
      "Authorization": `Bearer ${localStorage.token}`
      }
  })
  .then(r => r.json())
  .then(lessonsArr => {
      setLessons(lessonsArr)
  })            
}, [])

  return (

      <div>
        <NavBar currentUser={currentUser} handleLogout={handleLogout} />
                
          <Switch>
            <Route exact path='/signup'>
              <SignUp handleLogin={handleLogin} />
            </Route>
            <Route exact path='/login'>
              {currentUser === null ? <Login handleLogin={handleLogin} /> : <Redirect to='/profile'/>}
            </Route>
            <Route exact path='/profile'>
              {
                currentUser !== null ? 
                <UserAccount currentUser={currentUser} lessons={lessons} exercises={exercises}  completedExercises={completedExercises}/> 
                : <h1>Not signed in</h1>
                }
            </Route>
            <Route exact path='/lessons'>
              <LessonsContainer lessons={lessons}/>
            </Route>
            <Route exact path="/">
              <h1>Welcome To The Idioma Language Learning App</h1>
            </Route>
            <Route exact path='/introlesson'>
              <Lesson  />
            </Route>
            <Route exact path='/introexercises'>
              <Exercises exercises={exercises} completedExercises={completedExercises} />
            </Route>
          </Switch>        
      </div>
  );
}

export default App;
