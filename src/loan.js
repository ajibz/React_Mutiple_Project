import React,{useState} from 'react'
import './App.css'

export default function Loan(){
	const[loan,setLoan] = useState('')
	const[interest,setInterest] = useState('')
	const[period,setPeriod] = useState('')
	const[output,setOutput] = useState('')

	function Calculate(e){
		e.preventDefault()
			if(loan === "" && interest === "" && period === ""){
		setOutput("Loan Amount| Loan Interest | Period can not be empty")

	}
	else if( interest === "" && period === ""){
		setOutput("Loan Interest | Period can not be empty")

		

	}
	else if(period === ""){
		setOutput("Repayment Month can not be empty")


	}
	else if( loan === "" && period === ""){
		setOutput("Loan Amount | Period can not be empty")

	}
	else if( loan === "" && interest === ""){
		setOutput("Loan Amount  | Loan Interest can not be empty")

	}
	else if( interest === ""){

		setOutput("Loan Interest can not be empty") 

	}
	else{
		setOutput("# "+ (loan+(loan * interest)/100)/period) 
	}
	}
	return(
		<div style={{display : 'flex',justifyContent: 'center'}}>
		<div className="main">
			<form>
				<div style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
					<label>Loan Amount(#)</label>
					<input type="number" id="loan" onChange={(e)=>setLoan(e.target.value)}/>
				</div>
					<div style={{display: 'flex',justifyContent: 'center',marginTop: 10}}>
					<label>Interest Rate(%)</label>
					<input type="number" onChange={(e)=>setInterest(e.target.value)} />
				</div>
					<div style={{display: 'flex',justifyContent: 'center',marginTop: 10}}>
					<label>Months to Pay</label>
					<input type="number"  onChange={(e)=>setPeriod(e.target.value)} />
				</div>
				<div style={{display: 'flex',justifyContent: 'center',marginTop: 10}}>
				<button onClick={Calculate} >Calculate</button>
				</div>

				<div style={{display: 'flex',justifyContent: 'center',marginTop: 10}}>
				<h3 id="result">{output}</h3>
				</div>

			</form>
		</div>
	</div>

		)
}