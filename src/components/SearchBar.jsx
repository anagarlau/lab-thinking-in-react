import React from 'react'


class SearchBar extends React.Component{
    constructor(props){
        super(props)
      this.handleChange=this.handleChange.bind(this)  
    }
    
    handleChange(e){
     
        this.props.handleInput(e.target.value)
    }

    render(){
        console.log(this.props.value)
        return (<form> 
           
                <input value={this.props.productName} onChange={this.handleChange} placeholder="Search By Name" />
                {/* <h1> {this.props.value}</h1> */}
            
            </form>)
    }
}





export default SearchBar