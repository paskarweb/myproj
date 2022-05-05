import './App.css';
import { Footer } from './Footer';
//import UsrData from "./data/userdata.json";
import { AppUsrData } from './UserFC';
import { Btn } from './Btn/BtnAlertMy';
import { TickMy1 } from './TickClockMy';
import { NavbarFC } from './components/Navbar';
import { TodoForm } from './components/TodoForm';

/*const user = {
  userName: 'User1'
}*/
//console.log(UsrData.FirstName);

const HandleClick = () => (
  //console.log('значение this:', new Date().toLocaleTimeString());  
  alert('It is ' + new Date().toLocaleTimeString())
)

const App = () => (
  <>
    <NavbarFC />
    <div className="container">
      <TodoForm />
    </div>
    <div className="App-header">
      <h1>Hello user!</h1>
      <AppUsrData />
      <TickMy1 />
      <Btn OnClick={() => HandleClick()} text="Click alert" />
      <Footer copyright='copyright 01.05.2022' />
    </div>
  </>
)



//setInterval(TickMy1, 100);

export default App;
