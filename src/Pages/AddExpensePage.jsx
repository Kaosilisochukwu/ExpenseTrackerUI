import React from 'react'
import styled from 'styled-components'
import NavBar from '../Components/NavBar'

const AddExpensePage = () => {
  return (
    <AddExpenseStyle>
    <div className="nav-div">
      <NavBar />
    </div>
    <form className="add-exp">
      <input placeholder="Title"/>
      <input placeholder="Description"/>
      <input  type="number" placeholder="Amount"/>
      <select required>
        <option value="" disabled selected>Select transaction type</option>
        <option>Atm</option>
        <option>Atm</option>
        <option>Atm</option>
      </select>
      <button>Add</button>
    </form>
      
    </AddExpenseStyle>
  )
}

export default AddExpensePage

const AddExpenseStyle = styled.div`
width: 100%;

.add-exp{
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 25vh;
}
  
input, select{
  border: none;
  border-bottom: 1px solid black;
  height: 2rem;
  min-width: 30%;
  margin-bottom: 1rem;
}
input:focus, select:focus{
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