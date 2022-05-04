import './App.css';
import { Footer } from './Footer';


const user = { userName: 'User1' }
const App = () => (
  <div className="App">
    <h1>Hello world - {user.userName}</h1>
    <Footer copyright='C 55' />
  </div>
)

export default App;
