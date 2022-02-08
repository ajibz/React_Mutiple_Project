import React from 'react'
import {Link} from 'react-router-dom'

function Nav(){

	return(
		<div>
		<div style={{display:'flex',justifyContent :'center'}}>
		<Link to='/' style={{marginRight:20}}>Home</Link>
		<Link to='/add_post' style={{marginRight:20}}>AddPost</Link>
		<Link to='/contact' style={{marginRight:20}}>Contact</Link>
		<Link to='/calculator' style={{marginRight:20}}>Calculator</Link>
		<Link to='/loan' style={{marginRight:20}}>Loan </Link>
		<Link to='/fetchdata' style={{marginRight:20}}>Fetch Data</Link>
		</div>
		</div>

		)
}
export default Nav