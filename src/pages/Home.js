import React, { Component } from "react";

import  {config}  from "../services/datastore";

const clientId = config.clientId
const redirectUri = config.redirectUri

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
          searchQuery:null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }



  handleChange(event) {
    this.setState({searchQuery: event.target.value});
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.searchQuery);
    event.preventDefault();
  }

render(){

    return (
      <div>
      <div>
        <p>Welcome, youre just in time for karaoke night! Pick your player</p>
      </div>
      

      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.searchQuery} onChange={this.handleChange} />
        </label>
        <br></br>

        <input type="submit" value="Authenticate Rapgenius" onClick={event =>  window.location.href=`https://api.genius.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=me&state=${this.state.searchQuery}&response_type=code`}/>
      </form>  

      </div>
  );
}

}
export default Home;
