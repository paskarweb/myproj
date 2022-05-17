//import './App.css';
import styles from './App.module.css';
import { Footer } from './Footer';
//import UsrData from "./data/userdata.json";
import { AppUsrData } from './UserFC';
import { Btn } from './Btn/BtnAlertMy';
import { TickMy1 } from './TickClockMy';
import { NavbarFC } from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TodosPage } from './pages/TodosPage';
import { AboutPage } from './pages/AboutPage';
import FormInputText from './components/FormInputText';
import { TimerCard, TimerDataCtx, TimerStateReducer } from './components/TimerV1';
import { useReducer } from 'react';


/*const user = {
  userName: 'User1'
}*/
//console.log(UsrData.FirstName);

const HandleClick = () => (
  //console.log('значение this:', new Date().toLocaleTimeString());  
  alert('It is ' + new Date().toLocaleTimeString())
)

const App = () => {

  //for timer
  const [timer, dispatchAction] = useReducer(TimerStateReducer, {
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  return (
    <>
      <BrowserRouter>
        <NavbarFC />
        <div className={styles.container}>
          <Routes>
            <Route element={<TodosPage />} path="/TodosInput" ></Route>
            <Route element={<AboutPage />} path="/about" ></Route>
            <Route element={<FormInputText />} path="/localstrorage" ></Route>
            <Route element={<TickMy1 />} path="/clock" ></Route>
          </Routes>
        </div>
      </BrowserRouter>

      <div className={styles.homeContent}>
        <h1>Hello user!</h1>

        <TimerDataCtx.Provider value={{ ...timer, dispatchAction }}>
          <TimerCard />
        </TimerDataCtx.Provider>

        <AppUsrData />

        <Btn OnClick={() => HandleClick()} text="Click alert" />
        <Footer copyright='copyright 01.05.2022' />
      </div>


    </>
  )
}

//setInterval(TickMy1, 100);

export default App;