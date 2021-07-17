import React, { Component } from "react";

export class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //lyrics: props.lyrics
            
        };
      }

      dataSetter = (data) => {
        if (this.props.data && this.props.data.lyrics && this.props.data.translatedLyrics){
          return data
        } else{ 
            return 'Loading...'
          }
      }

render(){

    return (
        <div>
        <h1>Landing</h1>
        <br></br>
        <h2>Original</h2>
        <p>{(this.props.data && this.props.data.lyrics) ? this.props.data.lyrics : 'Loading lyrics...'}</p>
        <h2>Translation</h2>
        <p>{(this.props.data && this.props.data.translatedLyrics) ? this.props.data.translatedLyrics : 'Loading translation...'}</p>

        </div>
        )
    

}

}
export default Landing;
