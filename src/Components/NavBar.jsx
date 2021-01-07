import React from 'react'
import styled from 'styled-components'

const NavBar = () => {
  return (
    <HeaderStyle>    
      <div>Expense</div>
      <ul>
        <li>Sign Up</li>
        <li>Sign In</li>
        <li>Expenses</li>
        <li>Profile</li>
        <li>Sign Out</li>
        <li>Add Expense</li>
      </ul>
    </HeaderStyle>
  )
}

export default NavBar;

const HeaderStyle = styled.div`  
  display: flex;
  justify-content: space-between;
    margin: 1rem 2rem;
  div{
    font-size: 2rem;
    font-weight: bold;
  }
  ul{
    display: flex;
    list-style-type: none;
    justify-content: flex-end;
    flex-basis: 80%;
    align-items: center;
  }
  li{
    margin-left: 2rem;
  }
`
