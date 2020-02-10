import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Signin from './Signin'
import Signup from './Signup'
import Emailverification from './Emailverification'
import Addinterest from './Addinterest'
import User from './Userdetails'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <div>
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/emailverification" component={Emailverification} />
      <Route path="/addinterest" component={Addinterest} />
      <Route path="/userdetails" component={User} />
    </div>
  </BrowserRouter>
    </div>
  );
}

export default App;
