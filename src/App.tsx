import './App.css';
import { Footer } from './Footer';
//import UsrData from "./data/userdata.json";
import { AppUsrData } from './UserFC';
import { Btn } from './Btn/BtnAlertMy';
import { TickMy1 } from './TickClockMy'


/*const user = {
  userName: 'User1'
}*/
//console.log(UsrData.FirstName);

const App = () => (
  <div className="App-header">
    <h1>Hello user!</h1>
    <AppUsrData />
    <TickMy1 />
    <Btn OnClick={(v) => alert(v)} />
    <Footer copyright='copyright 01.05.2022' />
  </div>
)

//setInterval(TickMy1, 100);

export default App;
