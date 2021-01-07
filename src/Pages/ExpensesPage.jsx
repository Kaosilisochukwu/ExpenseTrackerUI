import React from 'react'
import styled from 'styled-components'
import { Pie } from 'react-chartjs-2'
import NavBar from '../Components/NavBar'

const ExpensesPage = () => {

  const state = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4'
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
        ],
        data: [65, 59, 80, 81, 56]
      }
    ]
  }
  return (
    <ExpenseStyle>
      <div className="nav-div">
        <NavBar />
      </div>
      
      <div className="expense-content">
      <div className="chart-div">
        <Pie
            data={state}
            options={{
              title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
      </div>
      <div className="tab-div">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td><button>Edit</button></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td><button>Edit</button></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td><button>Edit</button></td>
            </tr>
          </tbody>
        </table>
      </div>


        

  
      </div>
    </ExpenseStyle>
  )
}

export default ExpensesPage

const ExpenseStyle = styled.div`
width: 100%;
button{
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: .1rem 2rem;
}
button:hover{
  background-color: #0f0e0eac;
  color:white;
}
.expense-content{
  display: flex;
  justify-content: space-between;
  width:100%;
  margin-top: 5rem;
}
.tab-div{
  min-width: 60%;
}
.chart-div{
  min-width: 35%;
}
`
