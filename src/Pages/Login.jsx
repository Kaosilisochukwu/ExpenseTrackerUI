import React from 'react'
import styled from 'styled-components'
import NavBar from '../Components/NavBar'

const Login = () => {
  return (
    <LoginStyle>
    <div className="nav-div">
      <NavBar />
    </div>
      <form className="login">
          <input placeholder="Email" className="login-email" required/>
          <input placeholder="Password" className="login-pass" required/>
        <button type="submit">Login</button>
      </form>
    </LoginStyle>
  )
}

export default Login


const LoginStyle = styled.div`
width: 100%;
.login{
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 25vh;
}
  
input{
  border: none;
  border-bottom: 1px solid black;
  height: 2rem;
  min-width: 30%;
  margin-bottom: 1rem;
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
  min-width: 30%;
  margin-top: 2rem;
}

`