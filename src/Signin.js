import React from 'react';
import './App.css';
import { Redirect } from "react-router-dom";


export default class Signin extends React.Component{
  constructor(props) {
    super(props);
		this.state = {
			redirect:false,
			email: "",
			password:"",
			response:''
    };
	}

	signupapicall=()=>{
		const url ="http://localhost:8000/signin"
const data = {email:this.state.email,password:this.state.password}
fetch(url, { method: 'POST',
body: JSON.stringify(data), 
headers:{ 'Content-Type': 'application/json' } 
})
.then(res => res.json())
.catch(error =>console.log(error)
)
.then(response=>this.setState({response:response.message})	)
}

 handleSubmit=async(event)=>{
	event.preventDefault();
await this.signupapicall()
if(this.state.response==true){
this.setState({redirect:true})
	}
	else{
		alert("wrong username or password")
	}
}

	handleChange=(event)=>{
		
this.setState({[event.target.name]:event.target.value})
	}
	

  render(){
		if(this.state.redirect){
			return <Redirect to='/emailverification'/>;
			}
		return (
    <div className="main">
    <p>Signin</p>
		<form onSubmit={this.handleSubmit}>
  <div className="form-group"> 
    <input type="email" className="form-control" onChange={this.handleChange} id="exampleInputEmail1" name="email" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <input type="password" className="form-control" onChange={this.handleChange} id="exampleInputPassword1" name="password" placeholder="Password"/>
  </div>
  <button type="submit" className="btn btn-primary">Signin</button>
	<div>New to the site?<a href='/signup'>Sign up</a></div>
</form>
    </div>
  )};
}

