import React, { Component } from "react";

import  {config}  from "../services/datastore";

const clientId = config.clientId
const redirectUri = config.redirectUri

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
