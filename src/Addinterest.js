import React from 'react';
import './App.css'
import { Redirect } from "react-router-dom";

export default class Addinterest extends React.Component {
	constructor(props) {
    super(props);
		this.state = {
		token:'',
		interest:[],
		redirect:false,
		interes:["cricket","basketball","football","coding","playing games"]
    };
	}

	componentDidMount(){
		this.setState({token:localStorage.getItem("token")})
	}


	apiCall=()=>{
		const url ="http://localhost:8000/addinterest"
const data = {token:this.state.token,interest:this.state.interest}
fetch(url, { method: 'POST',
body: JSON.stringify(data), 
headers:{ 'Content-Type': 'application/json' } 
})
.then(res => res.json())
.catch(error =>
alert(error)
)
.then(response =>console.log("success",response))
	}
	
	handleClick=(event)=>{
		this.state.interest.push(event.target.value)
		document.getElementById(event.target.id).disabled=true
this.setState({
	...this.state.interest
})
	}

	handleSubmit=()=>{
		this.apiCall()
this.setState({
	redirect:true
})
	}
	
	
	render(){
		if(this.state.redirect){
			return <Redirect to='/userdetails'/>;
			}
		return (
    <div className="main">
			{this.state.interes.map((data,index)=>(
			 <input type="button" style={{margin:"20px"}} value={data} onClick={this.handleClick} id={index}/>
			))}
			<div><button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Add Interest</button>
  </div>
    </div>
  );
}
}