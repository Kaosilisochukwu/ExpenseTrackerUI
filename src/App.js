import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import HomePage from './Pages/HomePage';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import AddExpensePage from './Pages/AddExpensePage';
import ExpensesPage from './Pages/ExpensesPage';
import ProfilePage from './Pages/ProfilePage';

function App() {
  return (
    <AppStyle  className = "app">
      <ProfilePage />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;
  flex-direction: row;
  min-height: 100vh;
`
