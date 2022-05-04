import './App.css';
import { Footer } from './Footer';
//import UsrData from "./data/userdata.json";
import { AppUsrData } from './UserFC';

/*const user = {
  userName: 'User1'
}*/
//console.log(UsrData.FirstName);

const App = () => (
  <div className="App-header">
    <h1>Hello user!</h1>
    <AppUsrData />
    <Footer copyright='copyright 01.05.2022' />s
  </div>
)

export default App;
