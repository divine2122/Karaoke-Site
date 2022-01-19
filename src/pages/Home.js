import React, { Component } from "react";
import logo from '../logo.svg';
import {
  authFunction, preAuthFunction,
} from "../services/datastore"

const clientId = 'zMNZDYvktFEeAK3Qujfyrt5ActZwYpvvlJwATeprRbLAz3hxp2rZpX3YSHqzRhDC'
const redirectUri = 'http://localhost:3000/landing'

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
  
        };
      }

render(){

    return (
      <div>
      <div>
        <p>Welcome, youre just in time for karaoke night! Pick your player</p>
      </div>

      <button onClick={event =>  window.location.href=`https://api.genius.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=me&state=SOME_STATE_VALUE&response_type=code`}>
        Authenticate Rapgenius
      </button>

      </div>
  );
}

}
export default Home;
