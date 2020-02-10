import React from 'react';
import './App.css'

export default class User extends React.Component {
	constructor(props) {
    super(props);
		this.state = {
			token:'',
email:'',
interest:'',
name:'',
location:''
    };
	}

async	componentDidMount(){
		await this.setState({token:localStorage.getItem("token")})
		this.apiCall()
	}

	apiCall=()=>{
		const url ="http://localhost:8000/getuserdetails"
const data = { token:this.state.token}
fetch(url, { method: 'POST',
body: JSON.stringify(data), 
headers:{ 'Content-Type': 'application/json' } 
})
.then(res => res.json())
.catch(error =>
alert(error)
)
.then(response =>this.setState({email:response.data.email,interest:response.data.interest,name:response.data.name,location:response.data.location}))
	 }
		
	render(){
		
		return (
			<div className="main">
			<div>
			Welcome {this.state.name}
</div>

<div>
			Your Current Location is {this.state.location}
</div>
<div>your interest are</div>
	{this.state.interest && this.state.interest.map((data)=>(
		 <input type="button" style={{margin:"20px"}} value={data}/>
  ))};
	</div>
		)}
}