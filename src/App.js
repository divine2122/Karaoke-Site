import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import {
    functionsCall,
  } from "./services/datastore"


class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
        
        
    };
    }

componentDidMount = () => {
    //functionsCall().then((output)=> console.log(output))

    functionsCall()
    .then((res)=> {
    return res.json()})
    .then(   
    (output)=> console.log(output))

}
  


Landing() {
    //functionsCall().then((output)=> console.log(output))

    return (
    <h2>Landing</h2>
    )
  }
  
Users() {
    return <h2>Users</h2>;
  }
  
Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="Auth-link"
          href="https://api.genius.com/oauth/authorize?client_id=zMNZDYvktFEeAK3Qujfyrt5ActZwYpvvlJwATeprRbLAz3hxp2rZpX3YSHqzRhDC&redirect_uri=http://localhost:3000/landing&scope=me&state=SOME_STATE_VALUE&response_type=code"
          target="_blank"
          rel="noopener noreferrer"
        >
          Authorize App
        </a>
      </header>
    </div>
  );
}


/*function App()*/ render() {
    
return (
<Router>
<div>
<Switch>
            <Route path="/landing">
              <this.Landing />
            </Route>
            <Route path="/users">
              <this.Users />
            </Route>
            <Route path="/">
              <this.Home />
            </Route>
          </Switch>

</div>
</Router>
)}
}

export default App;
