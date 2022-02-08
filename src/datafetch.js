import React,{useState,useEffect} from 'react'
function FetchData(){


const [item,setItem] = useState([{}])
useEffect(()=>{
	fetch("http://localhost:8000/new_react/public/api.php")
										.then(data=>{return data.json()})
										.then(itemz=>setItem(itemz))

})
 



	var val = item.map(datas=>{
				return (
					<div key={datas.id}>
					<ul><li>
					{datas.surname}
					</li></ul>
					</div>

					
				)
					
			})


			

			return(
			<div>
			{console.log(val)}
			</div>
			)

}
export default FetchData 