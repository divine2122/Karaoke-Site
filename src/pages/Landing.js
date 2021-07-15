import React, { Component } from "react";

export class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //lyrics: props.lyrics
            
        };
      }

render(){

    return (
        <div>
        <h2>Landing</h2>
        <p>{this.props.lyrics ? this.props.lyrics : 'Loading...'}</p>
        </div>
        )
    

}

}
export default Landing;
