import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {login} from './components/Login/login';
import {signup} from './components/Login/signup';




import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/" component={login}/>  
          <Route exact path="/signup" component={signup}/>  
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
