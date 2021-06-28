import './App.css';
import React from 'react';
import { Person } from './component/Profile';
import Myprofile from './component/Myprofile';

class App extends React.Component {
  state = {Person}

  render() {
    return (
      <>
      <div class='container'>
        <button class="btn btn-primary" onClick={()=>this.setState({show:!this.state.show})} >Show me profile</button>
     {
       this.state.show &&   <Myprofile />
     }
     {
       !this.state.show && <h1></h1>
     }
  
      </div>
      </>
    );
  }
}


export default App;
