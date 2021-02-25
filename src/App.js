 import React from 'react';
import {data} from './data.json'
import './App.css';
import SearchBar from './components/SearchBar'
import ProductTable from './components/ProductTable'
 
 
class App extends React.Component{
      constructor(props){
        super(props)
        this.state={
          productName:''}
       this.handleInput=this.handleInput.bind(this)
      }  
  
    handleInput(newInput){
      this.setState({productName: newInput})
    }

  render(){
    
      return (
    <div className="App"> 
     <h1> IronStore </h1>
     <SearchBar  value={this.state.productName} handleInput={this.handleInput} />
     <ProductTable products={data} productName={this.state.productName} />
    </div>
  );
  }
  
}

export default App;
