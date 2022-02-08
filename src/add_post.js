import React,{useState} from 'react'

function AddPost(props){
	

// const [title,setTitle] = useState([])
const [blog,setBlog] = useState([{}])
{props=blog}
function PostSubmit(){
	
	

}
return(
	<div style={{display:'flex',justifyContent:'center',paddingTop:100}}>
	<div style={{backgroundColor:'skyblue',padding:40,borderRadius:7}} >
	<form>
	<div>
	<input type="text" style={{width:390,height:40,borderRadius:7}}  onChange={(e)=>{setBlog({title:e.target.value})}}/>
	</div>
	<div>
	<textarea cols="50" rows="10"  style={{marginTop:10}}  onChange={(e)=>{setBlog({post:e.target.value})}}>
	</textarea>
	</div>
	<button style={{width:200,height:33,borderRadius:7,marginTop:10,backgroundColor:'cadetblue',color:'white',cursor:'pointer'}} onClick={PostSubmit}>Add Post</button>
	</form>
	</div>
	</div>

	)

}
export default AddPost