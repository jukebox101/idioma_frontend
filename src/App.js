import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import LessonsContainer from './components/LessonsContainer';
import UserAccount from './components/UserAccount';
import Lesson from './components/Lesson';
import Exercises from './components/Exercises';
import Home from './components/Home';

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

  const handleLessons = (lessonsData) => {
    setLessons(lessonsData)
  }

  const handleExercises = (exercisesData) => {
    setExercises(exercisesData)
  }

  const handleCompletedExercises = (completedExercisesData) => {
    setCompletedExercises(completedExercisesData)
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
    
    fetch('http://localhost:3000/lessons', {
        headers: {
        "Authorization": `Bearer ${localStorage.token}`
        }
    })
    .then(r => r.json())
    .then(lessonsArr => {
        handleLessons(lessonsArr)
    })            


  }, [])
console.log(lessons)
  return (

      <div>
        <NavBar currentUser={currentUser} handleLogout={handleLogout} />
                
          <Switch>
            <Route exact path='/signup'>
              <SignUp handleLogin={handleLogin} />
            </Route>
            <Route exact path='/login'>
              {currentUser === null ? <Login handleLogin={handleLogin} /> : <Redirect to='/'/>}
            </Route>
            <Route exact path='/profile'>
              {
                currentUser !== null ? 
                <UserAccount currentUser={currentUser} handleCompletedExercises={handleCompletedExercises} lessons={lessons} exercises={exercises} completedExercises={completedExercises} /> 
                : <h1>Not signed in</h1>
                }
            </Route>
            <Route exact path='/lessons'>
              <LessonsContainer handleLessons={handleLessons} lessons={lessons} />
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path='/introlesson'>
              <Lesson />
            </Route>
            <Route exact path='/introexercises'>
              <Exercises exercises={exercises} handleExercises={handleExercises} handleCompletedExercises={handleCompletedExercises} completedExercises={completedExercises} />
            </Route>
          </Switch>        
      </div>
  );
}

export default App;
