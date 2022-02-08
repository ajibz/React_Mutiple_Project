import React,{useState} from 'react'

function Calc(){
	const [value,setValue]  = useState('')
	const [firstValue,setFirstValue]  = useState('')
	const [operator,setOperator]  = useState('')
	// const [status,setStatus]  = useState(false)

return(
	<div style={{display:'flex',justifyContent:'center',paddingTop:150}}>
	<div style={{backgroundColor:'cadetblue',padding:30,borderRadius:10}}>
	<div style={{display:'flex',justifyContent:'right',backgroundColor:'whitesmoke',alignItems:'center',paddingRight:10,borderWidth:1,borderStyle:'solid',width:350,height:60}}>
	<label >{value}</label>
	</div>
	<div style={{borderWidth:1,borderStyle:'solid',backgroundColor:'whitesmoke',width:360,marginTop:30}}>

	<div style={{display:'flex',justifyContent:'space-evenly',marginTop:10}}>
	<button onClick={(e)=>{setValue(value+e.target.value)}} style={{width:60,height:25,backgroundColor:'cadetblue',color:'white',cursor:'pointer',borderRadius:5,border:'none',fontWeight:'bolder'}} value='1'>1</button>
	<button onClick={(e)=>{setValue(value+e.target.value)}} style={{width:60,height:25,backgroundColor:'cadetblue',color:'white',cursor:'pointer',borderRadius:5,border:'none',fontWeight:'bolder'}} value='2'>2</button>
	<button onClick={(e)=>{setValue(value+e.target.value)}} style={{width:60,height:25,backgroundColor:'cadetblue',color:'white',cursor:'pointer',borderRadius:5,border:'none',fontWeight:'bolder'}} value='3'>3</button>
	<button onClick={(e)=>{setFirstValue(value);setOperator(e.target.value);setValue('')}} style={{width:60,height:25,backgroundColor:'cadetblue',color:'white',cursor:'pointer',borderRadius:5,border:'none',fontWeight:'bolder'}} value='*'>*</button>
	</div>

	<div style={{display:'flex',justifyContent:'space-evenly',marginTop:10}}>
	<button onClick={(e)=>{setValue(value+e.target.value)}} style={{width:60,height:25,backgroundColor:'cadetblue',color:'white',cursor:'pointer',borderRadius:5,border:'none',fontWeight:'bolder'}} value='4'>4</button>
	<button onClick={(e)=>{setValue(value+e.target.value)}} style={{width:60,height:25,backgroundColor:'cadetblue',color:'white',cursor:'pointer',borderRadius:5,border:'none',fontWeight:'bolder'}} value='5'>5</button>
	<button onClick={(e)=>{setValue(value+e.target.value)}} style={{width:60,height:25,backgroundColor:'cadetblue',color:'white',cursor:'pointer',borderRadius:5,border:'none',fontWeight:'bolder'}} value='6'>6</button>
	<button onClick={(e)=>{setFirstValue(value);setOperator(e.target.value);setValue('')}} style={{width:60,height:25,backgroundColor:'cadetblue',color:'white',cursor:'pointer',borderRadius:5,border:'none',fontWeight:'bolder'}} value='/'>/</button>
	</div>

	<div style={{display:'flex',justifyContent:'space-evenly',marginTop:10}}>
	<button onClick={(e)=>{setValue(value+e.target.value)}} style={{width:60,height:25,backgroundColor:'cadetblue',color:'white',cursor:'pointer',borderRadius:5,border:'none',fontWeight:'bolder'}} value='7'>7</button>
	<button onClick={(e)=>{setValue(value+e.target.value)}} style={{width:60,height:25,backgroundColor:'cadetblue',color:'white',cursor:'pointer',borderRadius:5,border:'none',fontWeight:'bolder'}} value='8'>8</button>
	<button onClick={(e)=>{setValue(value+e.target.value)}} style={{width:60,height:25,backgroundColor:'cadetblue',color:'white',cursor:'pointer',borderRadius:5,border:'none',fontWeight:'bolder'}} value='9'>9</button>
	<button onClick={(e)=>{setFirstValue(value);setOperator(e.target.value);setValue('')}} style={{width:60,height:25,backgroundColor:'cadetblue',color:'white',cursor:'pointer',borderRadius:5,border:'none',fontWeight:'bolder'}} value='-'>-</button>
	</div>

	<div style={{display:'flex',justifyContent:'space-evenly',marginTop:10}}>
	<button onClick={(e)=>{setValue('');setFirstValue('');setOperator('')}} style={{width:60,height:25,backgroundColor:'cadetblue',color:'white',cursor:'pointer',borderRadius:5,border:'none',fontWeight:'bolder'}}>clear</button>
	<button onClick={(e)=>{setValue(value+e.target.value)}} style={{width:60,height:25,backgroundColor:'cadetblue',color:'white',cursor:'pointer',borderRadius:5,border:'none',fontWeight:'bolder'}} value='0'>0</button>
	<button onClick={(e)=>{setValue(value+e.target.value)}} style={{width:60,height:25,backgroundColor:'cadetblue',color:'white',cursor:'pointer',borderRadius:5,border:'none',fontWeight:'bolder'}} value='.'>.</button>
	<button onClick={(e)=>{setFirstValue(value);setOperator(e.target.value);setValue('')}} style={{width:60,height:25,backgroundColor:'cadetblue',color:'white',cursor:'pointer',borderRadius:5,border:'none',fontWeight:'bolder'}} value='+'>+</button>
	</div>

	<div style={{display:'flex',justifyContent:'right',marginTop:10,paddingRight:23}}>
	
	<button onClick={(e)=>{ setValue(eval(parseFloat(firstValue)+operator+parseFloat(value)))}} style={{width:60,height:25,backgroundColor:'cadetblue',color:'white',cursor:'pointer',borderRadius:5,border:'none',fontWeight:'bolder'}}>=</button>
	</div>


	</div>
	</div>
	</div>

	)
}
export default Calc