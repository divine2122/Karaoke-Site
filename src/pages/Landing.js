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
        console.log('outside outputfunc')
        authFunction()
        .then((res)=> {
// function hasPosNeg(array){
//   let hasPos=false
//   let hasNeg=false
// array.forEach(num=>
//   {
//     hasPos=num>0
//     hasNeg=num<0
//   })
//   return [hasPos,hasNeg]
// }
// console.log(hasPosNeg([0,1,2]))
// console.log(hasPosNeg([0,-1,-2]))
// console.log(hasPosNeg([-1,0,1]))
// console.log(hasPosNeg([]))



          console.log('outputtest1',res, res.body)
        return res.json()})
        .then(   
        (output)=> {
          console.log('outputtest2',output)
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
        <img className="artistImagePhoto" src={(this.state.lyricData && this.state.lyricData.data) ? this.state.lyricData.data.imageLink : 'Loading image...'} alt="artist"/>
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
