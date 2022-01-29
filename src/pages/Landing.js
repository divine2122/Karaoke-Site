import React, { Component } from "react";
import {
  authFunction,
} from "../services/datastore"

export class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //lyrics: props.lyrics
            lyricData: "initial"
        };
      }

      componentDidMount = () => {
        authFunction()
        .then((res)=> {
        return res.json()})
        .then(   
        (output)=> {
        // this.setState({lyricData: this.dataSetter(output)})
        this.setState({lyricData:output})

      }
      )
    
    }

      
      // dataSetter = (data) => {
      //   if (this.props.data && this.props.data.lyrics && this.props.data.translatedLyrics){
      //     return data
      //   } else{ 
      //       return 'Loading...'
      //     }
      // }

render(){

    return (
        <div>
        <h1>Landing</h1>
        <br></br>
        <h2>Original</h2>
        <p>{(this.state.lyricData && this.state.lyricData.data) ? this.state.lyricData.data.lyrics : 'Loading lyrics...'}</p>
        <h2>Translation</h2>
        <p>{(this.state.lyricData && this.state.lyricData.data) ? this.state.lyricData.data.translatedLyrics : 'Loading translation...'}</p>

        </div>
        )
    

}

}
export default Landing;
