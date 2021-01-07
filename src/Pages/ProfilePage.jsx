import React from 'react'
import styled from 'styled-components'
import NavBar from '../Components/NavBar'
 

const ProfilePage = () => {
  return (
    <ProfileStyle>
    <div className="nav-div">
      <NavBar />
    </div>
      <div className="main">
        <div className="image-container">
          <p className="edit-icon"><i class="icon-edit"></i><br/></p>
          <img style={{ width: "100%"}} src= "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="user Avatar"/>
        </div>      
        <div className="main-container">
          <div className="title">
            <h1>John Doe</h1>
            <h4><i class="icon-email"></i>John@doe.com</h4>
            <h4>16 soji-Oshodi Street</h4>
            <h4>Somolu</h4>
            <h4>Lagos State</h4>
            <h4>Software Engineer</h4>
            <h4>Decagon</h4>
            <button>Edit Profile</button>
          </div>
        </div>
    </div>
   
    </ProfileStyle>
  )
}

export default ProfilePage

const ProfileStyle = styled.div`
width: 100%;
img{
  height:400px;
}
.image-container{
  min-width: 30%;
  position: relative;
}
.main{
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5); 
  height: 400px;
  margin: 4rem 2rem;
}
.main-container{
  min-width: 70%;
  position: relative;
  padding: 2rem 5rem;
}
.edit-icon{
  color: black;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 2rem;
}
button{
  background-color: #0f0e0eac;
  border: none;
  border-radius: 5px;
  padding: .1rem 2rem;
  bottom: 2rem;
  right: 2rem;
  position: absolute;
  color:white;
  
}
button:hover{
  background-color: black;
  color:white;
}
`
