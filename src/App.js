import React,{Component} from 'react';
import Form from './form';
import Display from './display';

class App extends Component{

  state={
    disp:[]
  }

  onSubmitHandler= async (e)=>{
    e.preventDefault();
    const input_value= e.target.elements.todo.value;
    console.log(input_value);
    
    var c=this.state.disp.slice();
    c.push(input_value);
    
     this.setState({disp:c})
    console.log(this.state.disp);
    e.target.elements.todo.value="";

  }
  render(){
    return(
      <div className="container">
        <Form submit={this.onSubmitHandler} />
        <Display array={this.state.disp} />
        
      </div>
    );
  }
}
export default App;
