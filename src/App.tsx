import './App.css';
import { Footer } from './Footer';
import UsrData from "./data/userdata.json";

const user = {
  userName: 'User1',
}

//console.log(UsrData.FirstName);

const App = () => (
  <div className="App-header">
    <h1>Hello user!</h1>
    <div>
      <ul>
        <li>First Name: {UsrData.users.FirstName}</li>
        <li>Short biography: {UsrData.users.ShortBiography}</li>
        <li>Public contacts: {UsrData.users.PublicContacts}</li>
      </ul>
    </div>
    <Footer copyright='copyright 01.05.2022' />
  </div>
)

export default App;
