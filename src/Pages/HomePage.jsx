import React from 'react'
import styled from 'styled-components'
import NavBar from '../Components/NavBar'

const HomePage = () => {
  return (
    <HomePageStyle>
    <img src="images/pexels-karolina-grabowska-4475523.jpg" alt="background" />
      <NavBar />
      <div className = "home-body">
        <div>
          <p className="body-head">Welcome to Expense Traker</p>
          <p>Tracks all your expeses</p>
        </div>
        <div className="btn-div">
          <p className="butn sign-up">Sign Up</p>
          <p className="butn sign-in">Sign In</p>
        </div>
      </div>
      
      <div className="func-div">
          <div className="func">
            <p className="func-head">Record your Expenses</p>
            <p className="func-body">Record your daily expeses on a reliable database</p>
          </div>
          <div className="func">
            <p className="func-head">Get your Exepense Statistics</p>
            <p className="func-body">Retrieve Statistics for all recorded expenses  in visually appealing graphs</p>
          </div>
          <div className="func last">
            <p className="func-head">Be up to date</p>
            <p className="func-body">Never lose any information</p>
          </div>
        </div>
    </HomePageStyle>
  )
}

export default HomePage

const HomePageStyle = styled.div`
  position: relative;
  width: 100%;
  background-color: rgba(4, 59, 255, 0.48);
  min-height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

img{
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: -2;
}
.func-div{
  display: flex;
  justify-content: space-around;
  bottom: 2rem;
  flex-basis: 100%;
  bottom: 2rem;
  text-align: center;
}
.body-head{
  font-size: 1.5rem;
  font-weight: bold;
}
.func-body{
}
.home-body{
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.btn-div{
  min-width: 15%;
  display: flex;
  justify-content: space-between;
}
.butn {
  padding: .7rem 2rem;
  border-radius: 5px;
  color: black;
}
.sign-up{
  margin-right: .5rem;
  background-color: yellow;
}
.last{
  margin-bottom: 3rem;
}
.sign-in{
  margin-left: .5rem;
  background-color: white;
}
.func{
  flex-basis: 25%;
}
.func-head{
  font-size: 1.2rem;

}
`
