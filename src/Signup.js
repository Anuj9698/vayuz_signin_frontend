import React from 'react';
import { Redirect } from "react-router-dom";
import './App.css'

export default class Signup extends React.Component{
  constructor(props) {
    super(props);
		this.state = {
			email: "",
			password:"",
			location:"",
			fullname:"",
			type:'password',
			redirect:false
    };
	}

	handleChange=(event)=>{
this.setState({[event.target.name]:event.target.value})
	}
	
	valid=()=>{
		console.log('hello')
		const reg=/^(?=.*[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/
		if(reg.test(this.state.password)){
			return true
		}
		else{
			return false
		}
	}

	signupapicall=()=>{
		const url ="http://localhost:8000/signup"
const data = { name:this.state.fullname, email:this.state.email,password:this.state.password,location:this.state.location }
fetch(url, { method: 'POST',
body: JSON.stringify(data), 
headers:{ 'Content-Type': 'application/json' } 
})
.then(res => res.json())
.catch(error =>
alert(error)
)
.then(response =>
	localStorage.setItem("token", response.created.token)
	
	)
}

	handleClick = () => this.setState(({type}) => ({
    type: type === 'text' ? 'password' : 'text'
	}))
	
	handleSubmit=(event)=>{
event.preventDefault();
const isValid=this.valid()
if(isValid==true){
this.signupapicall()
alert("Successfully signed up")
this.setState({redirect:true})
}
else{
	document.getElementById('password').innerHTML="password must contain minimum 6 character, alphanumeric and atleast one special character"
}
	}

  render(){
		if(this.state.redirect){
		return <Redirect to='/emailverification'/>;
		}
		return (
    <div className="main">
		<form onSubmit={this.handleSubmit}>
	
  <div className="form-group"> 
    <input type="email" className="form-control" onChange={this.handleChange} id="exampleInputEmail1" name="email" placeholder="Enter email" required/>
  </div>
  <div className="form-group">
	<div class="input-group mb-2 mr-sm-2">
    <input type={this.state.type} className="form-control" onChange={this.handleChange} id="password1" name="password" minLength="6" placeholder="Password" required/>
		<div class="input-group-prepend">
      <div class="input-group-text">	<span className="password__show" onClick={this.handleClick}>{this.state.type === 'text' ? <i class="fa fa-eye" aria-hidden="true"></i> : <i class="fa fa-eye-slash" aria-hidden="true"></i>}</span>
		</div>
    </div>
		<p id="password"></p>
  </div>
	</div>
	<div className="form-group"> 
    <input type="text" className="form-control" onChange={this.handleChange} id="exampleInputEmail1" name="fullname" placeholder="Full Name" required/>
  </div>
	<div className="form-group">
    <input type="text" className="form-control" onChange={this.handleChange} id="exampleInputPassword1" name="location" placeholder="Current Location" required/>
  </div>
  <button type="submit" className="btn btn-primary">Signup</button>
	<div>Already a member?<a href='/signin'>Sign in</a></div>
</form>
    </div>
  )};
}
