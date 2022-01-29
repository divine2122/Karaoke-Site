import React, { Component } from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

  import {
    authFunction,
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
        data: null,
        //lyricData: {data:'Placeholder. Dont delete'}
    };
    }

componentDidMount = () => {

  //   authFunction()
  //   .then((res)=> {
  //   return res.json()})
  //   .then(   
  //   (output)=> {
  //   this.setState({lyricData: this.dataSetter(output)})
  // }
  // )

}

// dataSetter = (output) => {
//   if (output.data && output.data.lyrics && output.data.translatedLyrics){
//     return {lyrics:output.data.lyrics, translatedLyrics:output.data.translatedLyrics}
//   } else{ 
//       return 'Retrieval Error'
//     }
// }



render() {   
    return (
        <Router>
            <div>

    {/* <div className="App">
      <Header />
    </div> */}
            <Switch>
                <Route exact path="/landing" render={(props) => (<Landing {...props} data={this.state.lyricData} />)}/>
                <Route exact path="/users" render={(props) => (<Users {...props} lyrics={this.state.lyricData} />)}/>
                <Route exact path="/"  component={Home}/>
            </Switch>
            </div>
        </Router>
    )
}
}

export default App;
