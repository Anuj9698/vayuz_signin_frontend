import React from 'react';
import { Redirect } from "react-router-dom";
import './App.css'

export default class Emailverification extends React.Component{
	constructor(props) {
    super(props);
		this.state = {
		otp:'',
		redirect:false,
		token:''
    };
	}

	componentDidMount(){
		this.setState({token:localStorage.getItem("token")})
	}

apiCall=()=>{
const url ="http://localhost:8000/emailverification"
const data = { otp:this.state.otp,token:this.state.token}
fetch(url, { method: 'POST',
body: JSON.stringify(data), 
headers:{ 'Content-Type': 'application/json' } 
})
.then(res =>console.log(res.json()))
.catch(error =>
alert(error)
)
.then(response =>console.error('success:', response))}

handleChange=(event)=>{
this.setState({
	otp:event.target.value
})
}

handleSubmit=(event)=>{
	event.preventDefault()
	this.apiCall()
		this.setState({
			redirect:true
	 })
 }
	
	render(){
		if(this.state.redirect){
			return <Redirect to='/addinterest'/>
		}
		
  return (
  <div className="main">
		<div>Verify your Email Address </div>
		<div>Enter 5 digit otp send on </div>
  <form onSubmit={this.handleSubmit}>
  <div className="form-group"> 
  <input type="number" className="form-control" onChange={this.handleChange} id="exampleInputEmail1" name="otp" placeholder="Enter 5 digit otp"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  </form>
    </div>
  );
}
}
