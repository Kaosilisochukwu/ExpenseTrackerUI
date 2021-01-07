import React from 'react'
import styled from 'styled-components'
import NavBar from '../Components/NavBar'

const Registration = () => {
  return (
  
    <RegistrationStyle>
    <div className="nav-div">
      <NavBar />
    </div>
      <form className="register-form"> 
        <h1>Register</h1>
        <label className="name">Full Name:<br/>
          <input placeholder="First Name" required className="half"/>
          <input placeholder="Last Name" required className="half sec-half"/>
        </label>
        <label className="contact">Contact:<br/>
          <input placeholder="Email Address" required type="email" className="half"/>
          <input placeholder="Username" required className="half sec-half"/>
        </label>
        <label className="address">Address: <br/>
        <input placeholder="Street Address" required className="full"/>
          <input placeholder="City" required className="half"/>
          <input placeholder="State" required className="half sec-half"/>
        </label>
        <label className="work">Work: <br/>
          <input placeholder="Occupatioin" required className="half"/>
          <input placeholder="Company" required className="half sec-half"/>
        </label>
        <label className="password">Work: <br/>
          <input placeholder="Password" required type="password" className="half"/>
          <input placeholder="Confirm Password" required type="password" className="half sec-half"/>
        </label>       
        <button type="submit">Register</button>
      </form>
    </RegistrationStyle>
  )
}

export default Registration


const RegistrationStyle = styled.div`
width: 100%;
.register-form{  
 display: flex;
 flex-direction: column;
 width: 52%;
margin: auto;
}
.half{
  width: 48%;  
}
.full{
  width:99%;
}
.sec-half{
  margin-left: 2%;
}
input{
  border: none;
  border-bottom: 1px solid black;
  height: 2rem;
  margin-bottom: 1rem;
background-color: inherit;
}
input:focus{
  border-bottom: 2.5px solid black;
  outline: none;
border-radius: 5px;
}
button{
  background-color: black;
  height: 2.5rem;
  color: white;
  border-radius: 5px;
  border: none;
}
`