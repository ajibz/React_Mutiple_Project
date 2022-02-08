import React from 'react';
import './index.css'


class Blog extends React.Component{

      constructor(props){
      	super(props);
      	this.state={
      		name:"Blog Post Update"
      	}
      	this.handleClick = this.handleClick.bind(this)
}

handleClick(){
	this.setState({name : "Blogging is good"})
}

render(){

	return(
		<div style={{display:'flex',justifyContent:'center',marginTop:100}}>
		<div className="MainDiv">
		<h1>{this.state.name}</h1>
		<p> This is a test blog post. dont get it all twisted because it will not count on anything. is that clear</p>
		<button onClick={this.handleClick}>Update</button>
		</div>
		</div>
	

		)
}



}

export default Blog;
