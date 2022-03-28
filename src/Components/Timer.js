import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
          timer:"",
        }
      }
      tickIt = ()=>{
        this.setState((state,props)=>({
            timer:new Date().toLocaleTimeString()
        }))
      }
      componentDidMount(){
        this.ttt = setInterval(()=>{this.tickIt()},1000)
      }
      componentWillUnmount(){
          console.log("sdfs")
          clearInterval(this.ttt);
      }
  render() {
    return (
      <div>
          <h2>{this.state.timer}</h2>
      </div>
    )
  }
}
