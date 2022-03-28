import React,{Component} from 'react'
import Timer from './Components/Timer';

class App extends Component{
  
  render(){
    const x = true;
    if(!true){
      return null
    }else{
      return(

        <div>
          <h1>Hello World!!!</h1>
          <h2>It is</h2><Timer />
          {x && <h1>sdfs</h1>}
        </div>
      )
    }
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
    
//     </div>
//   );
// }

export default App;
