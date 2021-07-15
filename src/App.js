import React, { Component } from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

  import {
    functionsCall,
  } from "./services/datastore"
  import { Home } from "./pages/Home";
  import { Landing } from "./pages/Landing";
  import { Users } from "./pages/Users";
  import Title from "./Title";
  import Header from "./Header";



class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
        lyrics: null
          
    };
    }

componentDidMount = () => {

    functionsCall()
    .then((res)=> {
    return res.json()})
    .then(   
    (output)=> {
    this.setState({lyrics: output.data.lyrics})

    console.log(output)}
    )

}
  

render() {   
    return (
        <Router>
            <div>

    {/* <div className="App">
      <Header />
    </div> */}
            <Switch>
                <Route exact path="/landing" render={(props) => (<Landing {...props} lyrics={this.state.lyrics} />)}/>
                <Route exact path="/users" render={(props) => (<Users {...props} lyrics={this.state.lyrics} />)}/>
                <Route exact path="/"  component={Home}/>
            </Switch>
            </div>
        </Router>
    )
}
}

export default App;
