import React, { useContext, useEffect } from 'react';
import { HashRouter as Router,Route } from 'react-router-dom';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { AuthContext, FirebaseContext } from './store/Context';
import Post from './store/PostContext'
import { render } from 'react-dom';

function App() {
  
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(() => {
     firebase.auth().onAuthStateChanged((user)=>{
       setUser(user)
     })
  })
  
  return (
    <div className='HomeClass'>
      <Post>
      
      <Router>
        <Route exact path='/' component={Home}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/login' component={Login}/>
        <Route path='/create' component={Create}/>
        <Route path='/view' component={View}/>
      </Router>
      
      </Post>
    </div>
  );
}


export default App;
